import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8080;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json("Hello World from Express");
});

app.get("/users", async (_req, res) => {
  try {
    const users = await prisma.todo.findMany();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Express is running at http://localhost:8080`);
});
