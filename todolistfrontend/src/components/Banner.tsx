import React from "react";
import { CiGrid2H } from "react-icons/ci";
import { Link } from "react-router-dom";

<<<<<<< HEAD
=======

>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
const Banner: React.FC = () => {
  return (
    <div className="border-b-2 border-[#ffffff10] flex justify-between py-4 px-5">
      <div className="flex gap-3">
        <div className="flex items-center gap-2 ">
          <CiGrid2H />
          <div>Tasks</div>
        </div>
        <div className="flex items-center gap-2 ">
          <CiGrid2H />
          <div>Projects</div>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
<<<<<<< HEAD
=======
          <CiGrid2H />
          <Link to="/addtask">
  <button>Ajouter une Tâche</button>
</Link>

>>>>>>> 08f06be876ae3e5d27d3e4725cd6fb3ccd6659f9
        </div>
    </div>
  );
};

export default Banner;
