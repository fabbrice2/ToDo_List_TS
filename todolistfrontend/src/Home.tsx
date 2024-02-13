import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TaskList from "./components/TaskList";


const App: React.FC = () => {
  return (
    <div className="bg-[#2A2B2F] text-white flex flex-col gap-3">
     <Header />
   
      <Banner />
      <TaskList />
    </div>
  );
};

export default App;
