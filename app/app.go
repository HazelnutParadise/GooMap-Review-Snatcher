package app

import (
	"sync"
	"time"

	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/datafetch"
)

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
	for {
		fetchStores()
		fetchReviews()
		// 可以加入適當的休眠以避免過度消耗 CPU
		time.Sleep(time.Millisecond * 1000)
	}
}

func fetchStores() {
	if toSearchBuf.Len() > 0 {
		// 從 map 中移除該項目
		searchingData := toSearchBuf.Pop().(searchingDataStruct)
		uuid := searchingData.UUID
		storeName := searchingData.StoreName

		// 執行搜尋商店的動作
		fetcher := datafetch.GoogleMapsStores()
		if fetcher == nil {
			failedBuf.Store(uuid, nil)
			return
		}
		searched := fetcher.Search(storeName)
		if searched == nil {
			failedBuf.Store(uuid, nil)
			return
		}
		searchedBuf.Store(uuid, searched)
	}
}

func fetchReviews() {
	if toGetReviewsBuf.Len() > 0 {
		data := toGetReviewsBuf.Pop().(gettingReviewsDataStruct)
		uuid := data.UUID
		storeID := data.StoreID
		pages := data.Pages

		// 執行取得評論的動作
		fetcher := datafetch.GoogleMapsStores()
		if fetcher == nil {
			failedBuf.Store(uuid, nil)
			return
		}
		reviews := fetcher.GetReviews(storeID, pages, datafetch.GoogleMapsStoreReviewsFetchingOptions{
			MaxWaitingInterval_Milliseconds: 3000,
			SortBy:                          datafetch.SortByRelevance,
		})
		if reviews == nil {
			failedBuf.Store(uuid, nil)
			return
		}
		gotReviewsBuf.Store(uuid, reviews)
	}
}
