import React, { useState, useEffect } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const AllTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data: Tasks[]) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  return (
    <div className="text-white">
      <ul className="border rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="border rounded-md">
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Completed: {task.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
