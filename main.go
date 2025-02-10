package main

import (
	"GooMap-review-snatcher/router"
	"fmt"
	"net/http"
)

func main() {
	r := router.GinRouter()

	fmt.Println("Serving on :8000")
	http.ListenAndServe(":8000", r)
}
