<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className="bg-[#2A2B2F] h-screen text-white">
      <Header />
      <Banner />
      <TaskList />
=======
import React from "react";
const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
>>>>>>> f6eaff0f9065a95740fa15ebcd96ad3e473d01a4
    </div>
  );
};

export default App;
