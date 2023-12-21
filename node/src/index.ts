import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8080;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json("Hello World from Express");
});

app.post("/todos", async (req, res) => {
  try {
    const { todo, done } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        todo,
        done,
      },
    });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating todo");
  }
});

app.get("/todos", async (_req, res) => {
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
