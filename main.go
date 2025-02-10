package main

import (
	"fmt"
	"net/http"
	"GooMap-review-snatcher/router"
)

func main() {
	r := router.GinRouter()

	fmt.Println("Serving on :8000")
	http.ListenAndServe(":8000", r)
}
