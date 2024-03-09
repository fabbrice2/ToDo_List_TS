import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  subTasks?: string[];
}

const UpdateTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    subTasks: [],
  });

  const [modificationEffectuee, setModificationEffectuee] = useState(false);

  useEffect(() => {
    fetch(`https://todo-list-ts-z22t.onrender.com/tasks/${id}`)
      .then((response) => response.json())
      .then((data: Task) => {
        setTask(data);
        setFormData(data);
      })
      .catch((error) => console.error("Error fetching task:", error));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModification = () => {
    setModificationEffectuee(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (modificationEffectuee) {
      timer = setTimeout(() => {
        setModificationEffectuee(false);
        navigate("/home");
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [modificationEffectuee]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://todo-list-ts-z22t.onrender.com/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-[#24262C] flex justify-center items-center relative ">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md h-96 ">
        <h2 className="text-xl font-semibold mb-4">Modifier la tâche</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="text-white block text-sm font-medium">
            Titre:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border focus:outline-none text-black px-2 py-1"
            />
          </label>
          <label className="text-white block text-sm font-medium">
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border focus:outline-none text-black px-2 py-1 resize-none"
              rows={4}
            />
          </label>
          <div className="flex items-center justify-between text-white">
            <button
              type="submit"
              onClick={handleModification}
              className="bg-blue-500 py-2 px-4 "
            >
              Modifier
            </button>
            <Link to={"/home"} className="bg-red-600 borde py-2 px-4 ">
              Cancel
            </Link>

            {modificationEffectuee && (
              <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white py-1 px-2 rounded-md">
                Modification effectuée avec succès
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
