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
FROM scratch

# 複製編譯好的檔案
COPY --from=builder /GooMap-Review-Snatcher/dist /dist

# 設定工作目錄
WORKDIR /dist

# 執行應用程式
CMD ["./GooMap-Review-Snatcher"]