import React, { useState, useEffect } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

interface DeletedTask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  deletedDate: string;
}

const TasksDeleted: React.FC = () => {
  const [deletedTasks, setDeletedTasks] = useState<DeletedTask[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/deletedTasks")
      .then((response) => response.json())
      .then((data: DeletedTask[]) => setDeletedTasks(data))
      .catch((error) => console.error("Error fetching deleted tasks:", error));
  }, []);

  return (
    <div className="rounded-md flex flex-col gap-4">
      {deletedTasks.map((task) => (
        <ul
          key={task.id}
          className="flex flex-col bg-[#292B31] rounded-md p-3 gap-5"
        >
          <li>
            <strong>{task.title}</strong>
            <div className="">
              <p className="text-[#ffffff6e]">{task.description}</p>
            </div>
          </li>
          <li className="flex flex-col gap-2"></li>
          <li className="flex justify-between">
            <div className="bg-[#ffffff06] rounded-full px-3 py-1 text-[#989CAA] grid place-items-center">
              {task.deletedDate}
            </div>
            <div className="flex items-center gap-1 text-l text-red-600">
              Supprimée
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TasksDeleted;
