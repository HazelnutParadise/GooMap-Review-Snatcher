package app

import (
	"github.com/HazelnutParadise/go-chunkpipe"
)

var waittingBuf = chunkpipe.NewChunkPipe[string]()

var dataBuf = chunkpipe.NewChunkPipe[any]()

func SearchStores() {}

func FetchReviews(storeID string) {
	waittingBuf.Push([]string{storeID})
}
