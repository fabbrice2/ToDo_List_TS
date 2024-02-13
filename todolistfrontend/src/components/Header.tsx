import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
const Header: React.FC = () => {
  const getMonthName = (month: number): string => {
    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1] || "";
  };

  const currentDate: string = (() => {
    const date: Date = new Date();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const day: number = date.getDate();
    const monthName: string = getMonthName(month);
    return `${day} ${monthName} ${year}`;
  })();


  const navigate = useNavigate();
  const handleDeconnexion = () => {
    // Code pour déconnecter l'utilisateur (par exemple : supprimer le token JWT, vider le state, etc.)
    
    // Redirection vers la page de connexion
    navigate('/');
  };

  



  return (

<div className="flex justify-between items-center text-white py-3 px-5 border">
  <div>Welcome back, Vincent 👋</div>
  <div className="flex justify-center items-center gap-2">
    <div>{currentDate}</div>
    <CiLogout className="text-2xl cursor-pointer" onClick={handleDeconnexion}/>
  </div>
 
</div>


  );
};

export default Header;





