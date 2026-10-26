# GooMap-Review-Snatcher 估咩評論小扒手

估咩評論小扒手是一個可以幫助你快速抓取 Google Maps 上店家的評論的小工具，只要輸入店家名稱，就可以幫你把評論抓下來，並且可以輸出成 csv 或 json 檔案，或用 StoreCoach 進行分析。

網址：https://gmaps-reviews.hazelnut-paradise.com/

## 開發環境

- Go 1.27.3，`go` 指令會依 `go.mod` 自動選用對應工具鏈。
- Bun 1.4.4，前端的安裝、開發、型別檢查與建置都由 Bun 執行。

前端指令請見 [frontend/README.md](frontend/README.md)。

```sh
go test ./...
go vet ./...
go run .
```

Docker 建置使用固定版本的 Go 與 Bun，以及 `bun.lock` 中的套件版本。

```sh
docker build -t gmrs .
```
