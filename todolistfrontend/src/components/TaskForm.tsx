import React from "react";

const TaskForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 p-8 rounded-md">
        <h1 className="text-lg font-semibold mb-4">
          Ajouter une nouvelle tâche:
        </h1>
        <div className="flex gap-10">
          <div className="flex flex-col gap-7">
            <div className="flex gap-5">
              <label className="block text-sm font-medium w-28">Titre</label>
              <input
                className="w-full border focus:outline-none text-black px-2 py-1"
                type="text"
                placeholder="Titre de la tâche que vous allez effectuer"
              />
            </div>
            <div className="flex gap-5">
              <label className="block text-sm font-medium w-28">
                Description
              </label>
              <textarea
                className="w-full border focus:outline-none text-black px-2 py-1 resize-none"
                placeholder="Description de la tâche"
                rows={4}
              />
            </div>
            <div className="flex gap-5">
              <label className="block text-sm font-medium w-28">Étape 1</label>
              <input
                className="w-full border focus:outline-none text-black px-2 py-1"
                type="text"
              />
            </div>
            <div className="flex gap-5">
              <label className="block text-sm font-medium w-28">Étape 2</label>
              <input
                className="w-full border focus:outline-none text-black px-2 py-1"
                type="text"
              />
            </div>
            <div className="flex gap-5">
              <label className="block text-sm font-medium w-28">Étape 3</label>
              <input
                className="w-full border focus:outline-none text-black px-2 py-1"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 justify-between">
            <div className="flex flex-col gap-7">
              <div className="flex gap-5">
                <label className="block text-sm font-medium w-28">
                  Étape 4
                </label>
                <input
                  className="w-full border focus:outline-none text-black px-2 py-1"
                  type="text"
                />
              </div>
              <div className="flex gap-5">
                <label className="block text-sm font-medium w-28">
                  Étape 5
                </label>
                <input
                  className="w-full border focus:outline-none text-black px-2 py-1"
                  type="text"
                />
              </div>
              <div className="flex gap-5">
                <label className="block text-sm font-medium w-28">
                  Étape 6
                </label>
                <input
                  className="w-full border focus:outline-none text-black px-2 py-1"
                  type="text"
                />
              </div>
              <div className="flex gap-5">
                <label className="block text-sm font-medium w-28">
                  Étape 7
                </label>
                <input
                  className="w-full border focus:outline-none text-black px-2 py-1"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 flex-1">
                Ajouter
              </button>
              <button className="bg-transparent border py-2 px-4 flex-1">
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default TaskForm;
=======
export default TaskForm;
>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
