import { Elysia, t as elysiaType } from "elysia";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const elysia = new Elysia();

elysia.get("/", () => "Hello World from Elysia 🦊!");

elysia.post(
  "/todo",
  async ({ body }) =>
    prisma.todo.create({
      data: {
        name: body.username,
        done: body.done,
      },
    }),
  {
    body: elysiaType.Object({
      username: elysiaType.String(),
      done: elysiaType.Boolean(),
    }),
  }
);

elysia.get("/todos", () => {
  return prisma.todo.findMany();
});

elysia.listen(8000);

console.log(`🦊 Elysia is running at http://localhost:8000`);
