<div align="center">
  <img width="512" src="https://github.com/VLtim43/Todos_/assets/69370181/cdcb5b95-8c68-4552-a0a5-118b763fb62f" alt="prisma-docker">
</div>

## Getting started

```
docker exec -it postgresql_docker_prisma_server_1 /bin/sh
```

```
npx prisma migrate dev --name init

```

## Local Database

```
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5533:5432 \
  postgres:latest
```

```
npx prisma migrate dev --name init
```

## Curl

```
curl -X POST http://localhost:8080/todos \
-H "Content-Type: application/json" \
-d '{"todo": "Your Todo Task Here", "done": false}'
```

## Tech & framework used

- [Docker](https://www.docker.com/), an open platform for developing, shipping, and running applications
- [Prisma](https://www.prisma.io/), a ORM for Node.js and Typescript
- [Express](https://expressjs.com/) a fast unopinionated, minimalist web framework for Node.js
- [PostgreSQL](https://www.postgresql.org/), an open source relational database

## Based on

https://github.com/grdnmsz/prisma-docker
