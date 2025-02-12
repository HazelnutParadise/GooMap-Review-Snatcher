package app

import (
	"sync"
	"time"

	"github.com/HazelnutParadise/insyra/datafetch"
)

var searchingBuf = sync.Map{}
var searchedBuf = sync.Map{}

var gettingReviewsBuf = sync.Map{}
var gotReviewsBuf = sync.Map{}

func SearchStores(uuid, storeName string) []datafetch.GoogleMapsStoreData {
	searchingBuf.Store(uuid, storeName)
	var stores []datafetch.GoogleMapsStoreData
	for {
		time.Sleep(time.Millisecond * 1000)
		searchedBuf.Range(func(key, value interface{}) bool {
			if key.(string) == uuid {
				stores = value.([]datafetch.GoogleMapsStoreData)
				return false
			}
			return true
		})
		if stores != nil {
			return stores
		}
	}
}

func GetReviews(uuid, storeID string, pages int) datafetch.GoogleMapsStoreReviews {
	gettingReviewsBuf.Store(uuid, [2]interface{}{storeID, pages})
	var reviews datafetch.GoogleMapsStoreReviews
	for {
		time.Sleep(time.Millisecond * 1000)
		gotReviewsBuf.Range(func(key, value any) bool {
			if key.(string) == uuid {
				reviews = value.(datafetch.GoogleMapsStoreReviews)
				return false
			}
			return true
		})
		if reviews != nil {
			return reviews
		}
	}
}

func KeepFetching() {
	for {
		fetchStores()
		fetchReviews()
		// 可以加入適當的休眠以避免過度消耗 CPU
		// time.Sleep(time.Millisecond * 100)
	}
}

func fetchStores() {
	var uuid string
	var storeName string
	var found bool

	searchingBuf.Range(func(key, value any) bool {
		uuid = key.(string)
		storeName = value.(string)
		found = true
		return false // 停止迭代，只取第一個項目
	})

	if found {
		// 從 map 中移除該項目
		searchingBuf.Delete(uuid)

		// 執行搜尋商店的動作
		searchedBuf.Store(uuid, datafetch.GoogleMapsStores().Search(storeName))
	}
}

func fetchReviews() {
	var uuid string
	var storeID string
	var pages int
	var found bool

	gettingReviewsBuf.Range(func(key, value any) bool {
		uuid = key.(string)
		storeID = value.([2]any)[0].(string)
		pages = value.([2]any)[1].(int)
		found = true
		return false // 停止迭代，只取第一個項目
	})

	if found {
		// 從 map 中移除該項目
		gettingReviewsBuf.Delete(uuid)

		// 執行取得評論的動作
		gotReviewsBuf.Store(uuid, datafetch.GoogleMapsStores().GetReviews(storeID, pages))
	}
}
