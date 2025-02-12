FROM golang:1.23-alpine AS builder

RUN apk add --no-cache bash curl

WORKDIR /app
COPY . .
RUN go install github.com/TimLai666/golte-cli@latest
RUN golte-cli build --sveltigo


FROM scratch
COPY --from=builder /app/dist/app /app

CMD ["./app"]
