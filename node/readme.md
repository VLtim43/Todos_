docker exec -it postgresql_docker_prisma_server_1 /bin/sh

npx prisma migrate dev --name init
