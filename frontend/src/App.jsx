import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (task.trim() === "") {
      return;
    }

    await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
      }),
    });

    setTask("");
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });

    fetchTasks();
  };
  const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });

  fetchTasks();
};

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((item) => (
          <div className="task" key={item._id}>
  <input
    type="checkbox"
    checked={item.completed || false}
    onChange={() => toggleTask(item._id, item.completed || false)}
  />

  <span className={item.completed ? "completed" : ""}>
    {item.task}
  </span>

  <button onClick={() => deleteTask(item._id)}>
    Delete
  </button>
</div>
        ))}
      </div>
    </div>
  );
}

export default App;