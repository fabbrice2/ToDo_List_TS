<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
import AllTasks from "./AllTasks";
import InProgressTasks from "./InProgressTasks";
import DoneTasks from "./DoneTasks";
import TasksDeleted from "./TasksDeleted";
import { FaCirclePlus } from "react-icons/fa6";
<<<<<<< HEAD
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
    <div className="grid grid-cols-4 gap-4 px-5">
      <div className="rounded-lg flex flex-col gap-3 p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div className="text-[#ffffff6e]">All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus className="text-[#ffffff6e]" />
            <Link to="/AddTask">
              <div>Add New task</div>
            </Link>
=======

const TaskGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
          </div>
        </div>
        <AllTasks />
      </div>
<<<<<<< HEAD
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
=======
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
        </div>
        <InProgressTasks />
      </div>
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
        </div>
        <DoneTasks />
      </div>
      <div className="border rounded-md flex flex-col p-5 bg-[#24262C]">
        <div className="flex items-center justify-between">
          <div>All tasks(11)</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaCirclePlus />
            <div>Add New task</div>
          </div>
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
        </div>
        <TasksDeleted />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default TaskList;
=======
export default TaskGrid;
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
