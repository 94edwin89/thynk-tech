import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../constants/constants.js";
import Button from "../UI/Button.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-white flex justify-center shadow-md">
      <div className="w-full lg:max-w-[1000px] flex justify-between p-3 items-center">
        <img
          src="https://codelynks.com/wp-content/uploads/2024/07/logo.svg"
          alt="logo"
          className="className={`w-[100px] h-[40px] sm:w-[150px] sm:h-[55px] lg:w-[200px] lg:h-[65px] transition-all duration-500"
        />

        <div
          className={`flex flex-col gap-5 md:flex-row md:items-center text-gray-800 md:z-auto md:static w-full md:w-auto pl-9 transition-all duration-500 ease-in ${
            showMenu ? "top-16" : "top-[-490px]"
          }`}
        >
          {headerLinks?.map((item) => (
            <NavLink
              className={`text-md font-medium `}
              key={item.title}
              style={({ isActive }) => ({
                color: isActive ? "#36c0fa" : "gray",
              })}
              to={item.url}
              onClick={() => setShowMenu(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div>
          <Button title="Contact Us"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
