import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

interface TaskStepProps {
  subTasks: string[];
  taskId: number;
  title: string;
}

interface Tasks {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  subTasks?: string[];
}

const TaskStep: React.FC<TaskStepProps> = ({ subTasks, taskId, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [agreement, setAgreement] = useState(false);
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  const handleDelete = (taskId: number) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const updateAgreement = () => {
    setAgreement(count === subTasks.length);

    setProgress((count / subTasks.length) * 100);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    updateAgreement();
  };

  const handleContinue = () => {
    fetch("http://localhost:3001/completedTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
        title: title,
        description: "Task Description",
        completed: false,
        subTasks: subTasks || [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task completed successfully", data);
        window.location.href = "/home";
      })
      .catch((error) => console.error("Error completing task:", error));
  };

  useEffect(() => {
    updateAgreement();
  }, [count, subTasks.length]);

  let progressBarColor = "bg-red-500";
  if (progress === 100) {
    progressBarColor = "bg-green-500";
  } else if (progress >= 50) {
    progressBarColor = "bg-orange-500";
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="h-2 bg-gray-500 rounded-full">
        <div
          className={`h-2 ${progressBarColor} rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleVisibility}
      >
        <div className="flex items-center text-[#ffffff6e]">
          <TfiMenuAlt />
          <p>Progress</p>
        </div>
        <div>
          {count}/{subTasks.length}
        </div>
      </div>
      {isVisible && (
        <div>
          {subTasks.map((subTask, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" name="agreement" onChange={handleChange} />
              <p>{subTask}</p>
            </div>
          ))}
        </div>
      )}
      <button
        disabled={!agreement}
        onClick={() => {
          handleContinue();
          handleDelete(taskId);
        }}
        className={`py-2 px-4 rounded ${
          agreement
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continuer
      </button>
    </div>
  );
};

export default TaskStep;
