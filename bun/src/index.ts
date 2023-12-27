import { PrismaClient } from "@prisma/client";
import { Elysia, t } from "elysia";

const elysia = new Elysia();
const PORT = 8080;
const prisma = new PrismaClient();

// interface TodoCreateInput {
//   todo: string;
//   done: boolean;
// }

console.log(`🦊 Elysia is running at http://localhost:${PORT}`);

elysia
  .get("/", () => [
    "Hello World from Elysia 🦊",
    "--------------------------",
    "Bun",
    "Elysia",
    "Prisma",
    "PostgreSQL 🐘",
  ])
  .listen(PORT);

elysia.get("/todos", async () => {
  const todo = await prisma.todo.findMany();
  return {
    data: {
      todo,
    },
  };
});

elysia
  .post(
    "/todos",
    async ({ body }) =>
      prisma.todo.create({
        data: body,
      }),
    {
      body: t.Object({
        todo: t.String(),
        done: t.Boolean(),
      }),
    }
  )
  .listen(PORT);
