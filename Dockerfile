FROM golang:1.23-alpine AS builder

# 安裝系統套件
RUN apk add --no-cache \
    bash \
    curl \
    build-base \
    gcc \
    musl-dev \
    libstdc++ \
    libgcc \
    nodejs \
    npm

WORKDIR /GooMap-Review-Snatcher
COPY . .

# 安裝相關依賴
RUN bun install svelte @sveltejs/vite-plugin-svelte
RUN go install github.com/TimLai666/golte-cli@latest

# 建構專案
RUN golte-cli build --sveltigo

FROM scratch

# 複製檔案
COPY --from=builder /GooMap-Review-Snatcher/dist /dist

# 執行應用程式
CMD ["/dist/GooMap-Review-Snatcher"]