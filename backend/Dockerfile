FROM golang:1.14.3-alpine3.11 AS BUILD

ENV LOG_LEVEL 'info'

WORKDIR /app

ADD src/go.mod /app/
ADD src/go.sum /app/

RUN go mod download

ADD src/main.go /app/

RUN go build -o /bin/mtlsbff-backend
RUN chmod +x /bin/mtlsbff-backend

CMD [ "/bin/mtlsbff-backend" ]
