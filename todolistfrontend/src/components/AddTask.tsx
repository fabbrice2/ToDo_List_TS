<<<<<<< HEAD
// List.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskStep from "./TaskStep";

interface ListProps {
  task?: {
    title: string;
    subTasks: string[];
  };
}
=======
import React, { useState, ChangeEvent } from "react";

interface ListProps {}
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9

function List(props: ListProps) {
  const [task, setTask] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);
<<<<<<< HEAD
  const [tasklist, setTasklist] = useState<
    { id: number; title: string; subTasks: string[] }[]
  >([]);
  const [count, setCount] = useState<number>(0);
  const [newFields, setNewFields] = useState<{ id: number; value: string }[]>(
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasklist(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des tâches :", error)
      );
  }, []);

  function handleClick(): void {
    const newTask = {
      title: task,
      subTasks: newFields.map((field) => field.value),
    };

    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((addedTask) => {
        setTasklist([...tasklist, addedTask]);
        setTask("");
        setNewFields([]);
        setClick(true);
        navigate("/home");
      })
      .catch((error) =>
        console.error("Erreur lors de l'ajout de la tâche :", error)
      );
  }

  function RemoveTask(id: number): void {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasklist(tasklist.filter((task) => task.id !== id));
        } else {
          console.error(
            "Erreur lors de la suppression de la tâche côté serveur"
          );
        }
      })
      .catch((error) => {
        console.error(
          "Erreur réseau lors de la suppression de la tâche :",
          error
        );
      });
  }

  function handleChangeLowTask(id: number, value: string): void {
    const updatedFields = newFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setNewFields(updatedFields);
  }

  function addField(): void {
    const newField = { id: newFields.length, value: "" };
    setNewFields([...newFields, newField]);
  }

  return (
    <div className="container h-screen bg-[#2A2B2F] grid items-center">
      <div className="max-w-2xl mx-auto p-6 border-2 rounded-md flex flex-col gap-4 flex-1">
        <div className="flex gap-5">
          <label className="text-white block text-sm font-medium w-28">
            Titre
          </label>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border focus:outline-none text-black px-2 py-1"
            type="text"
            placeholder="Titre de la tâche"
          />
        </div>
        <div className="flex gap-5">
          <label className="text-white block text-sm font-medium w-28">
            Description
          </label>
          <textarea
            className="w-full border focus:outline-none text-black px-2 py-1 resize-none"
            placeholder="(facultatif)"
            rows={4}
          />
        </div>
        {newFields.map((field) => (
          <div className="flex gap-5">
            <label className="text-white block text-sm font-medium w-28">
              Sous-tâche
            </label>
            <input
              key={field.id}
              value={field.value}
              onChange={(e) => handleChangeLowTask(field.id, e.target.value)}
              placeholder=""
              className="w-full border focus:outline-none text-black px-2 py-1"
              type="text"
            />
          </div>
        ))}
        <div className="flex items-center gap-4">
          <div>
            <button
              onClick={addField}
              className="bg-blue-500 border border-blue-500 text-white py-2 px-4"
            >
              Ajouter une sous-tâche
            </button>
          </div>
          <div className="flex gap-4 text-white">
            <button
              onClick={handleClick}
              className="bg-blue-500 py-2 px-4 flex-1"
            >
              Ajouter
            </button>
            <button className="bg-transparent border py-2 px-4 flex-1">
              Annuler
            </button>
          </div>
        </div>
        {click && (
          <ul className="mt-4">
            {tasklist.map((task) => (
              <li key={task.id} className="my-4">
                <div className="bg-gray-700 p-4 rounded-md">
                  <h1 className="text-xl font-bold mb-2 text-white">
                    {task.title}
                  </h1>
                  <TaskStep subTasks={task.subTasks} taskId={task.id} title={""} />
                  <button
                    onClick={() => RemoveTask(task.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
=======
  const [tasklist, setTasklist] = useState<string[]>([]);
  const [selectedtask, setSelectedtask] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [lowTask, setLowTask] = useState<string>("");
  const [newFields, setnewFields] = useState<React.ReactNode[]>([]);


  function handleClick(): void {
    setTasklist([...tasklist, task]);
    setTask("");
    setClick(true);
  }

  function SelectedTask(item: string): void {
    setSelectedtask(
      selectedtask.includes(item)
        ? selectedtask.filter((selectedtask) => selectedtask !== item)
        : [...selectedtask, item]
    );
  }

  function RemoveTask(item: string): void {
    setTasklist(tasklist.filter((task) => task !== item));
  }



  function Count(): void {
    setCount(count + 1);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }


  function addField() :void  {
    const newField = (
      <input
        placeholder="Entrez une tâche"
        value={task}
        onChange={handleChange}
      />
    );
  
    setnewFields([...newFields, newField]);
  }



  return (
    <div>
      <div>
    <input
          placeholder="Entrez une tâche"
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Ajouter</button>
        <button>+</button>
        {click && (
          <ul>
            {tasklist.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => SelectedTask(item)}
                  className={`${
                    selectedtask.includes(item) ? "line-through" : ""
                  }`}
                >
                  <h1>{item}</h1>
                  <h2>Complétion de la tâche</h2>
                  <h3>{count} / 10</h3>
                  <button onClick={() => RemoveTask(item)}>
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
                    Supprimer la tâche
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;
