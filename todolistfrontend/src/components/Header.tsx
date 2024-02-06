import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

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

  return (
    <div className="flex justify-between items-center text-white py-3 px-5 border">
      <div>Welcome back, Vincent 👋</div>
      <div className="flex justify-center items-center gap-2">
        <IoSearch className="cursor-pointer" />
        <IoNotificationsOutline className="cursor-pointer" />
        <div>{currentDate}</div>
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg"
          alt="userphoto"
        />
      </div>
    </div>
  );
};

export default Header;
