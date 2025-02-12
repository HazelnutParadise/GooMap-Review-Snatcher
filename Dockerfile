# 使用 Alpine 為基底
FROM golang:1.23-alpine

# 設定工作目錄
WORKDIR /app

# 複製所有程式碼，包含要被 embed 的靜態檔案
COPY . .

RUN go build -o /app/bin/main

# 設定容器啟動指令
CMD ["/app/bin/main"]
