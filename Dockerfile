FROM golang:1.23-alpine

RUN apk add --no-cache bash curl

WORKDIR /app
COPY . .
RUN go install github.com/TimLai666/golte-cli@latest
RUN golte-cli build --sveltigo

# 確保執行檔有執行權限
RUN chmod +x dist/GooMap-Review-Snatcher

CMD ["./dist/GooMap-Review-Snatcher"]
