import React, { useState, useEffect } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import TaskStep from "./TaskStep";
import { Link, useNavigate } from "react-router-dom";

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  subTasks: string[];
}
const AllTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [doneTasks, setDoneTasks] = useState<Tasks[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://todo-list-ts-z22t.onrender.com/tasks")
      .then((response) => response.json())
      .then((data: Tasks[]) => {
        const sortedTasks = data.sort((a, b) => b.id - a.id);
        setTasks(sortedTasks);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleDelete = (taskId: number) => {
    fetch(`https://todo-list-ts-z22t.onrender.com/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        window.location.href = "/home";
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
          <li className="flex flex-col gap-2 items-start">
            <strong>{task.title}</strong>
            <div className="text-[#ffffff6e] overflow-hidden">
              {task.description}
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <TaskStep
              subTasks={task.subTasks}
              taskId={task.id}
              title={task.title}
            />
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
                <Link to={`/update/${task.id}`}>
                  <LiaEdit />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AllTasks;
