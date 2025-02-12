FROM golang:1.23-alpine AS builder

WORKDIR /app

COPY . .

RUN go mod tidy

RUN go build -o main .

FROM scratch

COPY --from=builder /app/main .

CMD ["./main"]