import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import TaskStep from "./TaskStep";
import { Link } from "react-router-dom";
=======
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
<<<<<<< HEAD
  subTasks?: string[]; // Ajoutez cette ligne pour définir subTasks comme optionnel
=======
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
}

const InProgressTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data: Tasks[]) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
<<<<<<< HEAD

  const handleDelete = (taskId: number) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // log the deletion message
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="rounded-md flex flex-col gap-4">
      {tasks.map((task) => (
        <ul
          key={task.id}
          className="flex flex-col bg-[#292B31] rounded-md p-3 gap-5"
        >
          <li>
            <strong>{task.title}</strong>
            <p className="text-[#ffffff6e]">{task.description}</p>
          </li>
          <li className="flex flex-col gap-2">
            {task.subTasks && (
              <TaskStep
                subTasks={task.subTasks}
                taskId={task.id}
                title={task.title}
              /> // Ajoutez taskId ici
            )}
          </li>
          <li className="flex justify-between">
            <div className="bg-[#ffffff06] rounded-full px-3 py-1 text-[#989CAA] w-28 grid place-items-center">
              06 Jan 2024
            </div>
            <div className="flex items-center gap-1 text-2xl">
              <div
                className="delete text-red-700 cursor-pointer"
                onClick={() => handleDelete(task.id)}
              >
                <MdDelete />
              </div>
              <div className="edit text-green-700 cursor-pointer flex">
                <Link
                  to={`/update/${task.id}`}
                  className="btn btn-primary ms-3"
                >
                  <LiaEdit />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ))}
=======
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
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
    </div>
  );
};

export default InProgressTasks;
