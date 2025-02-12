# 使用 Alpine 為基底
FROM golang:1.23-alpine

# 設定工作目錄
WORKDIR /app

# 複製所有程式碼，包含要被 embed 的靜態檔案
COPY . .

# 確保 CGO 關閉，並編譯到 /app/bin/main
RUN go build -o /app/bin/main

# 設定容器啟動指令
CMD ["./app/bin/main"]
