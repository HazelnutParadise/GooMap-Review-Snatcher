package app

import "sync"

var waittingBuf = sync.Map{}

func SearchStores() {}

func FetchReviews() {
	waittingBuf.Store("fetchReviews", true)
}
