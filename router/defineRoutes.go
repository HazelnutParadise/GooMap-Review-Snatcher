package router

import (
	"GooMap-Review-Snatcher/app"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"github.com/HazelnutParadise/Go-Utils/conv"
	"github.com/HazelnutParadise/sveltigo"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// 驗證來源域名的中間件
func validateOrigin() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		allowedOrigin := "https://gmaps-reviews.hazelnut-paradise.com"

		// 檢查 Origin header
		origin := ctx.GetHeader("Origin")
		if origin != "" {
			if origin == allowedOrigin {
				ctx.Next()
				return
			}
		} else {
			// 如果沒有 Origin header，檢查 Referer header
			referer := ctx.GetHeader("Referer")
			if referer != "" && strings.HasPrefix(referer, allowedOrigin) {
				ctx.Next()
				return
			} // 如果兩個 header 都沒有，拒絕請求
			ctx.JSON(418, gin.H{"error": "ERR_B4C3D8"})
			ctx.Abort()
			return
		} // 如果來源不符合，拒絕請求
		ctx.JSON(418, gin.H{"error": "ERR_X7F9A2"})
		ctx.Abort()
	}
}

func defineRoutes(r *gin.Engine) {
	r.GET("/", func(ctx *gin.Context) {
		sveltigo.RenderPage(ctx.Writer, ctx.Request, "pages/App", map[string]any{
			"title":    "估咩評論小扒手🫳",
			"subtitle": "GooMap Review Snatcher",
		})
	})
	api := r.Group("/api")
	// 在所有 API 路由上應用域名驗證中間件
	api.Use(validateOrigin())

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

	api.POST("/review-mining", func(ctx *gin.Context) {
		client := http.DefaultClient
		req, err := http.NewRequest("POST", "https://storecoach.hazelnut-paradise.com/api/review-mining", ctx.Request.Body)
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		req.Header.Set("Content-Type", "application/json")
		resp, err := client.Do(req)
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		defer resp.Body.Close()
		var result map[string]any
		err = json.NewDecoder(resp.Body).Decode(&result)
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		ctx.JSON(200, result)
	})
}
