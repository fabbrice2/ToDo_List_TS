const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

interface Task{
  id: number,
  title: string,
  description: string,
  completed: boolean,
}

let tasks: Task[] = [
  {
    id: 1,
    title: "task1",
    description: "Description de la tache 1",
    completed: false,
  },
  {
    id: 2,
    title: "task2",
    description: "Description de la tache 2",
    completed: false,
  },
  {
    id: 3,
    title: "task3",
    description: "Description de la tache 3",
    completed: false,
  },
  {
    id: 4,
    title: "task4",
    description: "Description de la tache 4",
    completed: false,
  },
  // {
  //   id: 5,
  //   title: "task5",
  //   description: "Description de la tache 5",
  //   completed: false,
  // },
];

app.get("/tasks", function (req: any, res: { json: (arg0: Task[]) => void; }) {
  res.json(tasks);
});

app.get("/tasks/:id", function (req: { params: { id: string; }; }, res: { json: (arg0: Task) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

app.post("/tasks", function (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", function (req: { params: { id: string; }; body: any; }, res: { json: (arg0: { message: string; }) => void; }) {
  const taskId = parseInt(req.params.id, 10);
  const updatedTask = req.body;
  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  );
  res.json({ message: "Tâche mise à jour avec succès" });
});

app.delete("/tasks/:id", function (req: { params: { id: string; }; }, res: { json: (arg0: { message: string; }) => void; }) {
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: "Tâche supprimée avec succès" });
});

app.listen(port, function () {
  console.log(`Le serveur écoute sur le port ${port}`);
});
