package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GinRouter() http.Handler {
	r := gin.Default()

	// 提供 Vue 構建的靜態文件
	r.Static("/assets", "./frontend/dist/assets")

	// API 路由
	defineRoutes(r)

	// SPA 路由處理 - 所有未匹配的路由都返回 index.html
	r.NoRoute(func(c *gin.Context) {
		c.File("./frontend/dist/index.html")
	})

	return r
}
