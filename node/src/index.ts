import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 8080;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json([
    "Hello World from Express",
    "--------------------------",
    "Node.JS",
    "Express",
  ]);
});

app.get("/todos", async (_req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    //
    todos.length === 0 ? res.json({ message: "No todos" }) : res.json(todos);
    //
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching todos" });
  }
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

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: "Todo deleted successfully", todo });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting todo");
  }
});

app.listen(PORT, () => {
  console.log(`Express is running at http://localhost:8080`);
});
