package main

import (
	"GooMap-review-snatcher/app"
	"GooMap-review-snatcher/router"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := router.GinRouter()
	go app.KeepFetching()

	fmt.Println("Serving on :8000")
	http.ListenAndServe(":8000", r)
}
