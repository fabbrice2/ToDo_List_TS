import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<TaskForm />} />
      <Route path="/addtask" element={<AddTask />} />
      <Route path="/update/:id" element={<UpdateTask />}></Route>
    </Routes>
  );
};

export default App;
