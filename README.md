# MERN To-Do List Application

A full-stack To-Do List application built using the MERN stack.

## Live Demo

https://taskflow-frontend-uvy4.onrender.com

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Mark tasks as completed
- Store tasks in MongoDB
- Backend REST API
- React-based frontend
- Express.js server
- MongoDB database

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Vite
- CSS

## Project Structure

todo-app/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md

## API Endpoints

### Add a Task

POST /add

### Get All Tasks

GET /tasks

### Update Task Completion Status

PUT /tasks/:id

### Delete a Task

DELETE /tasks/:id

## How to Run the Project

### Backend

cd backend
npm install
node server.js

The backend runs on:

http://localhost:5000

### Frontend

Open a new terminal:

cd frontend
npm install
npm run dev

The frontend runs on:

http://localhost:5173

## Database

The application uses MongoDB Atlas to store tasks.

---

Created as a MERN Stack Internship Project.