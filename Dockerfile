FROM golang:1.23-alpine AS builder

RUN apk add --no-cache bash curl

WORKDIR /GooMap-Review-Snatcher
COPY . .
RUN go install github.com/TimLai666/golte-cli@latest

CMD [ "golte-cli", "run", "--sveltigo" ]
