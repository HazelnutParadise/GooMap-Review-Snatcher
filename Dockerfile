FROM golang:1.23-alpine

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


# 執行應用程式
CMD ["golte-cli", "run", "--sveltigo"]