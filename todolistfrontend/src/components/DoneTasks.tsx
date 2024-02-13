<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

interface CompletedTasks {
=======
import React, { useState, useEffect } from "react";

interface Tasks {
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
  id: number;
  title: string;
  description: string;
  completed: boolean;
<<<<<<< HEAD
  deletedDate?: string;
}

function DoneTasks() {
  const [completedTasks, setCompletedTasks] = useState<CompletedTasks[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/completedTasks")
      .then((response) => response.json())
      .then((data: CompletedTasks[]) => setCompletedTasks(data))
      .catch((error) => console.error("Error fetching completed tasks:", error));
  }, []);

  return (
    <div className="rounded-md flex flex-col gap-4">
      {completedTasks.map((task) => (
        <ul
          key={task.id}
          className="flex flex-col bg-[#292B31] rounded-md p-3 gap-5"
        >
          <li>
            <strong>{task.title}</strong>
          </li>
          <li className="flex flex-col gap-2">
            <div className="progress_bar h-0 bg-[#ffffff10] rounded-full">
              <div className="bg-[#FFA048] w-7 h-full rounded-full"></div>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-1 text-l text-green-600">
            Complété 
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
=======
}

const DoneTasks: React.FC = () => {
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
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9

export default DoneTasks;
