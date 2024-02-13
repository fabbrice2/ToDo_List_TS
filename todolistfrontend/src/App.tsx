import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TaskForm from "./components/TaskForm";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import Login from "./Login";
import Signup from "./Signup";


const App: React.FC = () => {
  return (
        <Routes>
          <Route path='/'element={<Login />}/>
          <Route path='/signup'element={<Signup />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />}></Route>
          <Route path='/logout'element={<Login />}/>
        </Routes>
  );
};

export default App;