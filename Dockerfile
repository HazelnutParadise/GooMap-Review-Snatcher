FROM golang:1.23-alpine AS builder

RUN apk add --no-cache bash curl

WORKDIR /app
COPY . .
RUN go install github.com/TimLai666/golte-cli@latest
RUN golte-cli build --sveltigo


FROM golang:1.23-alpine
COPY --from=builder /app/dist/goomap-review-snatcher /goomap-review-snatcher

CMD ["./goomap-review-snatcher"]
