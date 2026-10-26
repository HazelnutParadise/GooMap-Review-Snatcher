package app

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/datafetch"
)

type roundTripFunc func(*http.Request) (*http.Response, error)

func (f roundTripFunc) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }

func mockGoogle(t *testing.T, handler http.HandlerFunc) {
	t.Helper()
	server := httptest.NewServer(handler)
	target, err := url.Parse(server.URL)
	if err != nil {
		t.Fatal(err)
	}
	original := http.DefaultTransport
	http.DefaultTransport = roundTripFunc(func(r *http.Request) (*http.Response, error) {
		if r.URL.Host != "www.google.com.tw" {
			return nil, fmt.Errorf("unexpected network request: %s", r.URL.Host)
		}
		request := r.Clone(r.Context())
		request.URL.Scheme, request.URL.Host = target.Scheme, target.Host
		return original.RoundTrip(request)
	})
	t.Cleanup(func() {
		http.DefaultTransport = original
		server.Close()
		for toSearchBuf.Len() > 0 {
			toSearchBuf.Pop()
		}
		for toGetReviewsBuf.Len() > 0 {
			toGetReviewsBuf.Pop()
		}
		searchedBuf.Clear()
		gotReviewsBuf.Clear()
		failedBuf.Clear()
	})
}

func TestIdleWorkersDoNotLogEmptyQueueWarnings(t *testing.T) {
	var output bytes.Buffer
	original := log.Writer()
	log.SetOutput(&output)
	t.Cleanup(func() { log.SetOutput(original) })
	for range 10 {
		if fetchStores() || fetchReviews() {
			t.Fatal("empty queue must have no work")
		}
	}
	if strings.Contains(output.String(), "DataList is empty") {
		t.Fatalf("idle polling logged warnings: %s", output.String())
	}
}

func TestQueueConcurrentConsumers(t *testing.T) {
	queue := insyra.NewDataList()
	t.Cleanup(queue.Close)
	for i := range 100 {
		queue.InsertAt(0, i)
	}
	results := make(chan int, 100)
	var workers sync.WaitGroup
	for range threadCount {
		workers.Go(func() {
			for {
				job := popQueued(queue)
				if job == nil {
					return
				}
				results <- job.(int)
			}
		})
	}
	workers.Wait()
	close(results)
	seen := make(map[int]bool)
	for id := range results {
		if seen[id] {
			t.Fatalf("job %d was consumed twice", id)
		}
		seen[id] = true
	}
	if len(seen) != 100 || queue.Len() != 0 {
		t.Fatalf("consumed %d jobs, remaining %d", len(seen), queue.Len())
	}
	for i := range 3 {
		queue.InsertAt(0, i)
	}
	for i := range 3 {
		if got := popQueued(queue); got != i {
			t.Fatalf("queue order = %v, want %d", got, i)
		}
	}
}

func searchPage() []any {
	store := make([]any, 12)
	store[10], store[11] = "0x123:0x456", "測試商店"
	page := make([]any, 65)
	page[64] = []any{[]any{nil, store}}
	return page
}

func reviewPage(id, next string, empty bool) []any {
	record := make([]any, 28)
	record[1] = 5
	record[2] = []any{"一天前", nil, "1792886400000"}
	record[3] = []any{"測試評論者", nil, "https://www.google.com/maps/contrib/123", 7, 4}
	record[5], record[26], record[27] = id, "zh-Hant", "好吃 &amp; 親切<br>值得再訪"
	block := make([]any, 7)
	block[2], block[6] = []any{record}, next
	if empty {
		block[2] = []any{}
	}
	group := make([]any, 11)
	group[10] = block
	return []any{nil, group}
}

func TestFetchStores(t *testing.T) {
	mockGoogle(t, func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/search" || r.URL.Query().Get("q") != "測試商店" {
			t.Errorf("unexpected search request: %s", r.URL)
		}
		_ = json.NewEncoder(w).Encode(searchPage())
	})
	toSearchBuf.InsertAt(0, searchingDataStruct{UUID: "search", StoreName: "測試商店"})
	if !fetchStores() {
		t.Fatal("queued search was not processed")
	}
	result, ok := searchedBuf.LoadAndDelete("search")
	if !ok {
		t.Fatal("search result missing")
	}
	encoded, _ := json.Marshal(result)
	if string(encoded) != `[{"ID":"0x123:0x456","Name":"測試商店"}]` {
		t.Fatalf("unexpected search contract: %s", encoded)
	}
}

func TestSearchStoresEmptyAndFailure(t *testing.T) {
	for _, mode := range []string{"empty", "http failure", "malformed"} {
		t.Run(mode, func(t *testing.T) {
			mockGoogle(t, func(w http.ResponseWriter, r *http.Request) {
				switch mode {
				case "http failure":
					w.WriteHeader(503)
				case "malformed":
					_, _ = w.Write([]byte("not JSON"))
				default:
					_ = json.NewEncoder(w).Encode([]any{})
				}
			})
			result := make(chan []datafetch.GoogleMapsStoreData, 1)
			finished := make(chan struct{})
			go func() {
				result <- SearchStores("failed-search", "測試商店")
				close(finished)
			}()
			t.Cleanup(func() {
				failedBuf.Store("failed-search", nil)
				select {
				case <-finished:
				case <-time.After(time.Second):
					t.Error("search did not stop")
				}
			})
			deadline := time.Now().Add(2 * time.Second)
			for toSearchBuf.Len() == 0 {
				if time.Now().After(deadline) {
					t.Fatal("search was not queued")
				}
				time.Sleep(time.Millisecond)
			}
			if !fetchStores() {
				t.Fatal("search was not processed")
			}
			select {
			case stores := <-result:
				if stores != nil {
					t.Fatalf("failed search returned stores: %v", stores)
				}
			case <-time.After(2 * time.Second):
				t.Fatal("search failure was not delivered")
			}
			if _, ok := searchedBuf.Load("failed-search"); ok {
				t.Fatal("failed search wrote a successful result")
			}
		})
	}
}

func TestFetchReviewsPagination(t *testing.T) {
	for _, tc := range []struct {
		name  string
		pages int
		calls int
	}{
		{"one page", 1, 1},
		{"page limit", 2, 2},
		{"all pages", 0, 2},
	} {
		t.Run(tc.name, func(t *testing.T) {
			calls := 0
			mockGoogle(t, func(w http.ResponseWriter, r *http.Request) {
				calls++
				var payload []any
				if err := json.Unmarshal([]byte(r.URL.Query().Get("reqpld")), &payload); err != nil {
					t.Error(err)
					w.WriteHeader(400)
					return
				}
				args := payload[1].([]any)[9].([]any)
				if args[1] != float64(1) || args[9] != float64(10) || args[11].([]any)[0] != "0x123:0x456" {
					t.Errorf("wrong sort, page size or store: %v", args)
				}
				expectedToken := ""
				if calls == 2 {
					expectedToken = "next-page"
				}
				if args[19] != expectedToken {
					t.Errorf("page token = %v, want %q", args[19], expectedToken)
				}
				next := "next-page"
				if calls == 2 && tc.pages == 0 {
					next = ""
				}
				_ = json.NewEncoder(w).Encode(reviewPage(fmt.Sprint(calls), next, false))
			})
			StartGetReviews("reviews", "0x123:0x456", tc.pages)
			if _, done, failed := CheckReviewsResult("reviews"); done || failed {
				t.Fatal("queued reviews must be pending")
			}
			if !fetchReviews() {
				t.Fatal("queued reviews were not processed")
			}
			reviews, done, failed := CheckReviewsResult("reviews")
			if !done || failed || len(reviews) != tc.calls || calls != tc.calls {
				t.Fatalf("reviews=%d calls=%d done=%v failed=%v", len(reviews), calls, done, failed)
			}
			first := reviews[0]
			if first.Content != "好吃 & 親切\n值得再訪" || first.ReviewerReviewCount != 7 || first.ReviewerPhotoCount != 4 || first.Language != "zh-Hant" || first.ReviewID != "1" {
				t.Fatalf("new review fields lost: %+v", first)
			}
			encoded, _ := json.Marshal(first)
			var fields map[string]any
			_ = json.Unmarshal(encoded, &fields)
			want := []string{"reviewer", "reviewer_id", "reviewer_state", "reviewer_level", "reviewer_review_count", "reviewer_photo_count", "review_id", "review_time", "review_date", "language", "content", "rating"}
			if len(fields) != len(want) {
				t.Fatalf("review schema: %s", encoded)
			}
			for _, key := range want {
				if _, ok := fields[key]; !ok {
					t.Errorf("missing review field %q", key)
				}
			}
			if fields["reviewer_state"] != "" || fields["reviewer_level"] != float64(0) {
				t.Fatalf("unexpected unavailable reviewer metadata: %s", encoded)
			}
			if _, done, _ := CheckReviewsResult("reviews"); done {
				t.Fatal("result must be consumed once")
			}
		})
	}
}

func TestFetchReviewsEmptyAndFailure(t *testing.T) {
	for _, mode := range []string{"empty", "http failure", "malformed", "second page failure"} {
		t.Run(mode, func(t *testing.T) {
			calls := 0
			mockGoogle(t, func(w http.ResponseWriter, r *http.Request) {
				calls++
				switch {
				case mode == "http failure" || mode == "second page failure" && calls == 2:
					w.WriteHeader(503)
				case mode == "malformed":
					_, _ = w.Write([]byte("not JSON"))
				default:
					next := ""
					if mode == "second page failure" {
						next = "next-page"
					}
					_ = json.NewEncoder(w).Encode(reviewPage("1", next, mode == "empty"))
				}
			})
			StartGetReviews("result", "0x123:0x456", 2)
			fetchReviews()
			reviews, done, failed := CheckReviewsResult("result")
			if !done || failed != (mode != "empty") {
				t.Fatalf("done=%v failed=%v reviews=%v", done, failed, reviews)
			}
			if mode == "empty" {
				encoded, _ := json.Marshal(reviews)
				if string(encoded) != "[]" {
					t.Fatalf("empty success must encode as [], got %s", encoded)
				}
			} else if reviews != nil {
				t.Fatalf("failed requests must not return partial results: %v", reviews)
			}
		})
	}
}
