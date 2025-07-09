package router

import (
	"GooMap-Review-Snatcher/app"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"github.com/HazelnutParadise/Go-Utils/conv"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// 驗證來源域名的中間件
func validateOrigin() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		allowedOrigin := "https://gmaps-reviews.hazelnut-paradise.com"
		localOrigin := "http://localhost:8000"
		localOrigin127 := "http://127.0.0.1:8000"

		// 檢查 Origin header
		origin := ctx.GetHeader("Origin")
		if origin != "" {
			if origin == allowedOrigin || origin == localOrigin || origin == localOrigin127 {
				ctx.Next()
				return
			}
		} else {
			// 如果沒有 Origin header，檢查 Referer header
			referer := ctx.GetHeader("Referer")
			if referer != "" && (strings.HasPrefix(referer, allowedOrigin) ||
				strings.HasPrefix(referer, localOrigin) ||
				strings.HasPrefix(referer, localOrigin127)) {
				ctx.Next()
				return
			}
			// 如果兩個 header 都沒有，允許請求（用於開發）
			ctx.Next()
			return
		}
		// 如果來源不符合，拒絕請求
		ctx.JSON(418, gin.H{"error": "ERR_X7F9A2"})
		ctx.Abort()
	}
}

func defineRoutes(r *gin.Engine) {
	// Vue 應用的路由現在由靜態文件處理，不需要特別的路由

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
		uuidParam := ctx.Query("uuid")

		if storeID == "" || pages == "" {
			ctx.JSON(400, gin.H{"error": "storeID and pages are required"})
			return
		}

		// 如果沒有提供 UUID，表示第一次請求，啟動任務
		if uuidParam == "" {
			reviewUUID := uuid.New().String()
			app.StartGetReviews(reviewUUID, storeID, conv.ParseInt(pages))
			// 回傳 202 Accepted 表示任務已啟動但尚未完成
			ctx.JSON(202, gin.H{
				"uuid":    reviewUUID,
				"status":  "processing",
				"message": "Review fetching started",
			})
			return
		}

		// 如果有 UUID，檢查結果
		reviews, isCompleted, hasError := app.CheckReviewsResult(uuidParam)

		if !isCompleted {
			// 還在處理中，回傳 202
			ctx.JSON(202, gin.H{
				"uuid":    uuidParam,
				"status":  "processing",
				"message": "Still fetching reviews",
			})
			return
		}

		if hasError {
			// 處理失敗，回傳 500
			ctx.JSON(500, gin.H{"error": "Failed to fetch reviews"})
			return
		}

		// 成功完成，回傳 200 和結果
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
