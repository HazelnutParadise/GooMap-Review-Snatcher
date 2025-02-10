package app

import (
	"github.com/HazelnutParadise/go-chunkpipe"
	"github.com/HazelnutParadise/insyra/datafetch"
)

var waittingBuf = chunkpipe.NewChunkPipe[string]()

var dataBuf = chunkpipe.NewChunkPipe[map[string]any]()

func SearchStores() {}

func GetReviews(storeID string) {
	waittingBuf.Push([]string{storeID})
}

func KeepFetchingReviews() {
	var storeId string
	datafetch.GoogleMapsStores().GetReviews(storeId, 0).ToDataTable()
}
