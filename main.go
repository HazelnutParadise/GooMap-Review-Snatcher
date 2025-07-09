package main

import (
	"GooMap-Review-Snatcher/app"
	"GooMap-Review-Snatcher/router"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := router.GinRouter()
	go app.KeepFetching()

	fmt.Println("Serving on 127.0.0.1:5432")
	http.ListenAndServe("127.0.0.1:5432", r)
}
