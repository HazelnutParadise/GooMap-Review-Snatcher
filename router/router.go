package router

import (
	"net/http"

	"GooMap-Review-Snatcher/build"

	"github.com/HazelnutParadise/sveltigo"
	"github.com/gin-gonic/gin"
)

func wrapMiddleware(middleware *func(http.Handler) http.Handler, ctx *gin.Context) {
	if sveltigo.GetRenderContext(func() *http.Request {
		(*middleware)(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx.Request = r
			ctx.Next()
		})).ServeHTTP(ctx.Writer, ctx.Request)
		return ctx.Request
	}()) == nil {
		ctx.Abort()
	}
}

func GinRouter() http.Handler {
	// since gin doesm't use stdlib-compatible signatures, we have to wrap them
	// page := func(c string) gin.HandlerFunc {
	// 	return gin.WrapH(golte.Page(c))
	// }
	layout := func(c string) gin.HandlerFunc {
		return func(ctx *gin.Context) {
			handler := sveltigo.Layout(c)
			wrapMiddleware(&handler, ctx)
		}
	}

	r := gin.Default()
	// register the main Golte middleware
	r.Use(func(ctx *gin.Context) {
		wrapMiddleware(&build.Sveltigo, ctx)
	})

	r.Use(layout("layouts/Layout"))

	defineRoutes(r)

	return r
}
