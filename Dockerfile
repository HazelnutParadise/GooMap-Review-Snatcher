# 使用 Alpine 為基底
FROM golang:1.22-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 先下載 go module 依賴，避免頻繁重新下載
COPY go.mod go.sum ./
RUN go mod download

# 複製所有程式碼，包含要被 embed 的靜態檔案
COPY . .

# 確保 CGO 關閉，並編譯到 /app/bin/main
RUN CGO_ENABLED=0 go build -o /app/bin/main

# 使用 Alpine 作為最終映像
FROM alpine:latest
WORKDIR /root/

# 從 builder 複製執行檔
COPY --from=builder /app/bin/main .

# 安裝 TLS 憑證（如果程式需要連 HTTPS API）
RUN apk add --no-cache ca-certificates

# 設定容器啟動指令
CMD ["./main"]
