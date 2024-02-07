import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/Banner";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App: React.FC = () => {
  return (
    <div className="bg-[#2A2B2F] h-screen text-white">
      <Header />
      <Banner />
      <Routes>
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/" element={<TaskList />} />
      </Routes>
    </div>
  );
};

export default App;
