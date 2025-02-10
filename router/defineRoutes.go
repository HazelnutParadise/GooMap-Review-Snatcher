package router

import (
	"github.com/HazelnutParadise/sveltigo"
	"github.com/gin-gonic/gin"
)

func defineRoutes(r *gin.Engine) {
	r.GET("/", func(ctx *gin.Context) {
		sveltigo.RenderPage(ctx.Writer, ctx.Request, "pages/App", map[string]any{
			"title": "估咩評論小扒手🫳",
		})
	})
}
