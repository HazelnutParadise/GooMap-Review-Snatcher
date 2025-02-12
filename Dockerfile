FROM golang:1.23-alpine AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o /app/bin/main


FROM alpine:latest
COPY --from=builder /app/main .

CMD ["./main"]