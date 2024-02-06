import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App: React.FC = () => {
  return (
    <div className="bg-[#2A2B2F] h-screen text-white">
      <Header />
      <Banner />
      <TaskList />
      {/* <TaskForm /> */}
    </div>
  );
};

export default App;
