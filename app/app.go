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

func SearchStores(uuid, storeName string) []datafetch.GoogleMapsStoreData {
	toSearchBuf.InsertAt(0, searchingDataStruct{
		UUID:      uuid,
		StoreName: storeName,
	})
	for {
		time.Sleep(time.Millisecond * 1000)
		if storesData, ok := searchedBuf.LoadAndDelete(uuid); ok {
			stores := storesData.([]datafetch.GoogleMapsStoreData)
			return stores
		} else {
			if _, ok := failedBuf.LoadAndDelete(uuid); ok {
				return nil
			}
		}
	}
}

func GetReviews(uuid, storeID string, pages int) datafetch.GoogleMapsStoreReviews {
	toGetReviewsBuf.InsertAt(0, gettingReviewsDataStruct{
		UUID:    uuid,
		StoreID: storeID,
		Pages:   pages,
	})

	for {
		time.Sleep(time.Millisecond * 1000)
		if reviews, ok := gotReviewsBuf.LoadAndDelete(uuid); ok {
			return reviews.(datafetch.GoogleMapsStoreReviews)
		} else {
			if _, ok := failedBuf.LoadAndDelete(uuid); ok {
				return nil
			}
		}
	}
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
			return true
		}
		searched := fetcher.Search(storeName)
		if searched == nil {
			failedBuf.Store(uuid, nil)
			return true
		}
		searchedBuf.Store(uuid, searched)
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
			return true
		}
		reviews := fetcher.GetReviews(storeID, pages, datafetch.GoogleMapsStoreReviewsFetchingOptions{
			MaxWaitingInterval_Milliseconds: 3000,
			SortBy:                          datafetch.SortByRelevance,
		})
		if reviews == nil {
			failedBuf.Store(uuid, nil)
			return true
		}
		gotReviewsBuf.Store(uuid, reviews)
		return true
	}
	return false
}
