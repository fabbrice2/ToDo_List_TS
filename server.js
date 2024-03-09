"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql = require("mysql");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DBNAME = process.env.DB_DBNAME || "react_ecommerce";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DBNAME,
});
app.post("/signup", (req, res) => {
    const sql = "INSERT INTO login (`name`, `email` ,`password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Failed");
        }
    });
});
let tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Description of Task 1",
        completed: false,
        subTasks: ["Subtask 1.1", "Subtask 1.2"],
    },
    {
        id: 2,
        title: "Task 2",
        description: "Description of Task 2",
        completed: false,
        subTasks: ["Subtask 2.1", "Subtask 2.2", "Subtask 2.3"],
    },
    {
        id: 3,
        title: "Task 3",
        description: "Description of Task 3",
        completed: false,
        subTasks: ["Subtask 3.1"],
    },
    {
        id: 4,
        title: "Task 4",
        description: "Description of Task 4",
        completed: false,
        subTasks: [],
    },
    {
        id: 5,
        title: "Task 5",
        description: "Description of Task 5",
        completed: false,
        subTasks: ["Subtask 5.1", "Subtask 5.2", "Subtask 5.3", "Subtask 5.4"],
    },
];
let deletedTasks = [];
let CompletedTasks = [];
// Récupération de toutes les tâches
app.get("/tasks", (req, res) => {
    const tasksWithSubTasksCount = tasks.map((task) => (Object.assign(Object.assign({}, task), { subTasksCount: task.subTasks ? task.subTasks.length : 0 })));
    res.json(tasksWithSubTasksCount);
});
// Récupération d'une tâche par son ID
app.get("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({ message: "Tâche non trouvée" });
    }
});
// Ajout d'une nouvelle tâche
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false,
        subTasks: req.body.subTasks || [],
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
// Mise à jour d'une tâche par son ID
app.put("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = req.body;
    tasks = tasks.map((task) => task.id === taskId ? Object.assign(Object.assign({}, task), updatedTask) : task);
    res.json({ message: "Tâche mise à jour avec succès" });
});
// Suppression d'une tâche par son ID
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask) {
        deletedTask.deletedDate = new Date().toLocaleDateString();
        deletedTasks.push(deletedTask);
    }
    tasks = tasks.filter((task) => task.id !== taskId);
    res.json({
        message: "Tâche supprimée avec succès",
        deletedDate: deletedTask ? deletedTask.deletedDate : undefined,
    });
});
// Récupération des tâches supprimées
app.get("/deletedTasks", (req, res) => {
    res.json(deletedTasks);
});
// Récupération de toutes les tâches complétées
app.get("/completedTasks", (req, res) => {
    res.json(CompletedTasks);
});
// Ajout d'une tâche complétée
app.post("/completedTasks", (req, res) => {
    const newCompletedTask = Object.assign(Object.assign({}, req.body), { completed: true });
    CompletedTasks.push(newCompletedTask);
    res.status(201).json(newCompletedTask);
});
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
