package router

import (
	"fmt"
	"goomap-review-snatcher/app"

	"github.com/HazelnutParadise/Go-Utils/conv"
	"github.com/HazelnutParadise/sveltigo"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func defineRoutes(r *gin.Engine) {
	r.GET("/", func(ctx *gin.Context) {
		sveltigo.RenderPage(ctx.Writer, ctx.Request, "pages/App", map[string]any{
			"title":    "估咩評論小扒手🫳",
			"subtitle": "GooMap Review Snatcher",
		})
	})

	api := r.Group("/api")
	api.GET("/search", func(ctx *gin.Context) {
		storeName := ctx.Query("storeName")
		if storeName == "" {
			ctx.JSON(400, gin.H{"error": "storeName is required"})
			return
		}
		// 產生一個 UUID
		searchUUID := uuid.New().String()
		fmt.Println("searchUUID", searchUUID)
		fmt.Println("storeName", storeName)
		stores := app.SearchStores(searchUUID, storeName)
		if stores == nil {
			ctx.JSON(500, gin.H{"error": "Failed to fetch data"})
			return
		}
		ctx.JSON(200, stores)
	})
	api.GET("/reviews", func(ctx *gin.Context) {
		storeID := ctx.Query("storeID")
		pages := ctx.Query("pages")
		if storeID == "" || pages == "" {
			ctx.JSON(400, gin.H{"error": "storeID and pages are required"})
			return
		}
		// 產生一個 UUID
		reviewUUID := uuid.New().String()
		reviews := app.GetReviews(reviewUUID, storeID, conv.ParseInt(pages))
		if reviews == nil {
			ctx.JSON(500, gin.H{"error": "Failed to fetch data"})
			return
		}
		ctx.JSON(200, reviews)
	})
}
