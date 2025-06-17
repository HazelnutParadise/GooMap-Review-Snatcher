package app

import (
	"sync"
	"time"

	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/datafetch"
)

// 線程數量設定（您可以在這裡修改線程數量）
const threadCount = 3

var toSearchBuf = insyra.NewDataList()

type searchingDataStruct struct {
	UUID      string
	StoreName string
}

var searchedBuf = sync.Map{}

var toGetReviewsBuf = insyra.NewDataList()

type gettingReviewsDataStruct struct {
	UUID    string
	StoreID string
	Pages   int
}

var gotReviewsBuf = sync.Map{}

var failedBuf = sync.Map{}

// 查詢中的緩衝區
var searchingBuf = sync.Map{}
var gettingReviewsBuf = sync.Map{}

func SearchStores(uuid, storeName string) []datafetch.GoogleMapsStoreData {
	// 檢查是否已經有結果
	if storesData, ok := searchedBuf.LoadAndDelete(uuid); ok {
		stores := storesData.([]datafetch.GoogleMapsStoreData)
		return stores
	}

	// 檢查是否失敗了
	if _, ok := failedBuf.LoadAndDelete(uuid); ok {
		return nil
	}

	// 檢查是否正在查詢中
	if _, ok := searchingBuf.Load(uuid); ok {
		return []datafetch.GoogleMapsStoreData{} // 回傳空陣列表示正在查詢中
	}

	// 如果都沒有，開始新的查詢
	searchingBuf.Store(uuid, true)
	toSearchBuf.InsertAt(0, searchingDataStruct{
		UUID:      uuid,
		StoreName: storeName,
	})

	return []datafetch.GoogleMapsStoreData{} // 回傳空陣列表示已開始查詢
}

func GetReviews(uuid, storeID string, pages int) datafetch.GoogleMapsStoreReviews {
	// 檢查是否已經有結果
	if reviews, ok := gotReviewsBuf.LoadAndDelete(uuid); ok {
		return reviews.(datafetch.GoogleMapsStoreReviews)
	}

	// 檢查是否失敗了
	if _, ok := failedBuf.LoadAndDelete(uuid); ok {
		return nil
	}

	// 檢查是否正在查詢中
	if _, ok := gettingReviewsBuf.Load(uuid); ok {
		return nil // 回傳 nil 表示正在查詢中
	}

	// 如果都沒有，開始新的查詢
	gettingReviewsBuf.Store(uuid, true)
	toGetReviewsBuf.InsertAt(0, gettingReviewsDataStruct{
		UUID:    uuid,
		StoreID: storeID,
		Pages:   pages,
	})

	return nil // 回傳 nil 表示已開始查詢
}

func KeepFetching() {
	// 啟動工作線程
	for i := 0; i < threadCount; i++ {
		go worker(i)
	}
}

func worker(workerID int) {
	for {
		worked := false

		// 處理商店搜尋任務
		if fetchStores() {
			worked = true
		}

		// 處理評論獲取任務
		if fetchReviews() {
			worked = true
		}

		// 如果沒有工作可做，稍微休眠以避免過度消耗 CPU
		if !worked {
			time.Sleep(time.Millisecond * 100)
		}
	}
}

func fetchStores() bool {
	if toSearchBuf.Len() > 0 {
		// 從 map 中移除該項目
		searchingData := toSearchBuf.Pop().(searchingDataStruct)
		uuid := searchingData.UUID
		storeName := searchingData.StoreName

		// 執行搜尋商店的動作
		fetcher := datafetch.GoogleMapsStores()
		if fetcher == nil {
			failedBuf.Store(uuid, nil)
			searchingBuf.Delete(uuid) // 從查詢中緩衝區移除
			return true
		}
		searched := fetcher.Search(storeName)
		if searched == nil {
			failedBuf.Store(uuid, nil)
			searchingBuf.Delete(uuid) // 從查詢中緩衝區移除
			return true
		}
		searchedBuf.Store(uuid, searched)
		searchingBuf.Delete(uuid) // 從查詢中緩衝區移除
		return true
	}
	return false
}

func fetchReviews() bool {
	if toGetReviewsBuf.Len() > 0 {
		data := toGetReviewsBuf.Pop().(gettingReviewsDataStruct)
		uuid := data.UUID
		storeID := data.StoreID
		pages := data.Pages

		// 執行取得評論的動作
		fetcher := datafetch.GoogleMapsStores()
		if fetcher == nil {
			failedBuf.Store(uuid, nil)
			gettingReviewsBuf.Delete(uuid) // 從查詢中緩衝區移除
			return true
		}
		reviews := fetcher.GetReviews(storeID, pages, datafetch.GoogleMapsStoreReviewsFetchingOptions{
			MaxWaitingInterval_Milliseconds: 3000,
			SortBy:                          datafetch.SortByRelevance,
		})
		if reviews == nil {
			failedBuf.Store(uuid, nil)
			gettingReviewsBuf.Delete(uuid) // 從查詢中緩衝區移除
			return true
		}
		gotReviewsBuf.Store(uuid, reviews)
		gettingReviewsBuf.Delete(uuid) // 從查詢中緩衝區移除
		return true
	}
	return false
}
