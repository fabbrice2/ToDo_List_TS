import React, { useState, useEffect } from "react";
import AllTasks from "./AllTasks";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";
import TasksDeleted from "./TasksDeleted";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const addDoneTask = (task: Task) => {
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, task]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div className="text-[#ffffff6e]">All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus className="text-[#ffffff6e]" />
            <Link to="/AddTask">
              <div>Add New task</div>
            </Link>
          </div>
        </div>
        <AllTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>Tasks in progress</div>
        </div>
        <InProgressTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>Completed Task</div>
        </div>
        <DoneTasks />
      </div>
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>Tasks Deleted</div>
        </div>
        <TasksDeleted />
      </div>
    </div>
  );
};

export default TaskList;
