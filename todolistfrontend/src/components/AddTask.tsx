import React, { useState, ChangeEvent } from "react";

interface ListProps {}

function List(props: ListProps) {
  const [task, setTask] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);
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
