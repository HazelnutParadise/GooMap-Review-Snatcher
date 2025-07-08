package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GinRouter() http.Handler {
	r := gin.Default()

	// 提供 Vue 構建的靜態文件
	r.Static("/assets", "./frontend/dist/assets")
	r.StaticFile("/vite.svg", "./frontend/dist/vite.svg")

	// 提供 Vue 的 index.html 作為默認頁面
	r.StaticFile("/", "./frontend/dist/index.html")
	r.NoRoute(func(c *gin.Context) {
		c.File("./frontend/dist/index.html")
	})

	defineRoutes(r)

	return r
}
