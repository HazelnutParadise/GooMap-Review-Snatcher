FROM golang-alpine:1.23 AS builder

WORKDIR /app

COPY . .

RUN go build -o main .

FROM scratch

COPY --from=builder /app/main .

CMD ["./main"]