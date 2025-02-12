FROM golang:1.23 AS builder

WORKDIR /app

RUN go install github.com/TimLai666/golte-cli@latest

# 再複製所有程式碼（包含 `embed` 用的靜態檔案）
COPY . .

RUN golte-cli build --sveltigo

FROM alpine:lastest

COPY --from=builder /app/dist/app /app/bin/main

CMD ["/app/bin/main"]
