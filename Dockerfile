FROM golang:1.23-alpine AS builder

WORKDIR /app
COPY . .
RUN go install github.com/TimLai666/golte-cli
RUN golte-cli build --sveltigo

FROM scratch
COPY --from=builder /app/dist /
CMD ["./GooMap-Review-Snatcher"]
