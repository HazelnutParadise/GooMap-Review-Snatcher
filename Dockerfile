FROM golang:1.23-alpine AS builder

# 安裝必要的系統套件
RUN apk add --no-cache \
    bash \
    curl \
    build-base \
    gcc \
    musl-dev \
    libstdc++ \
    libgcc

WORKDIR /GooMap-Review-Snatcher
COPY . .

# 安裝 golte-cli 並建構專案
RUN go install github.com/TimLai666/golte-cli@latest
RUN golte-cli build --sveltigo

# 使用多階段建構來減少最終映像大小
FROM alpine:latest

# 複製必要的函式庫
COPY --from=builder /usr/lib/libstdc++.so.6 /usr/lib/
COPY --from=builder /usr/lib/libgcc_s.so.1 /usr/lib/
COPY --from=builder /dist/GooMap-Review-Snatcher /dist/

# 設定工作目錄
WORKDIR /dist

# 執行應用程式
CMD ["./GooMap-Review-Snatcher"]