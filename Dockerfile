FROM golang:1.23-alpine

RUN apk add --no-cache bash curl

WORKDIR /app
COPY . .
RUN go install github.com/TimLai666/golte-cli@latest
# 檢查當前目錄結構
RUN pwd && ls -la

# 執行建置並確認輸出
RUN golte-cli build --sveltigo
RUN ls -la dist/

# 確保執行檔有執行權限
RUN chmod +x dist/GooMap-Review-Snatcher

CMD ["/app/dist/GooMap-Review-Snatcher"]
