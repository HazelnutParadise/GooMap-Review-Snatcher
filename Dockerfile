FROM oven/bun:latest AS frontend-builder

WORKDIR /app

COPY  frontend/ ./frontend/

RUN cd frontend && \
    bun install && \
    bun run build

FROM golang:1.23-alpine AS builder

WORKDIR /app

# 先複製 `go.mod` 和 `go.sum`，提高快取效率
COPY go.mod go.sum ./
RUN go mod download

# 再複製所有程式碼（包含 `embed` 用的靜態檔案）
COPY . .

# 明確設定 CGO_ENABLED，避免靜態連結問題
RUN CGO_ENABLED=0 go build -o /app/bin/main .

FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/bin/main /main
COPY --from=frontend-builder /app/frontend/dist /frontend/dist

CMD ["/main"]
