const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.log("MongoDB connection error:", error);
});

app.post("/add", async (req, res) => {
    try {
        const newTask = new Task({
            task: req.body.task
        });

        await newTask.save();

        res.status(201).json({
            message: "Task added successfully",
            task: newTask
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding task",
            error: error.message
        });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();

        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching tasks",
            error: error.message
        });
    }
});
app.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true }
        );

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({
            message: "Error updating task",
            error: error.message
        });
    }
});
app.delete("/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting task",
            error: error.message
        });
    }
});
app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});