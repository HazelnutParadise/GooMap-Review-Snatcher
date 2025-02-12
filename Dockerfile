FROM golang:1.23-alpine

# 安裝系統套件
RUN apk add --no-cache \
    bash \
    curl \
    build-base \
    gcc \
    musl-dev \
    libstdc++ \
    libgcc 
    # nodejs \
    # npm

    WORKDIR /GooMap-Review-Snatcher
COPY . .

# 安裝相關依賴
# RUN npm install svelte @sveltejs/vite-plugin-svelte
RUN go install github.com/TimLai666/golte-cli@latest
# RUN golte-cli build --sveltego

RUN golte-cli build --sveltigo

# 執行應用程式
CMD ["./GooMap-Review-Snatcher/dist/GooMap-Review-Snatcher"]