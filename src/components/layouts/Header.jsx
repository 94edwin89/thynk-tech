import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../constants/constants.js";
import Button from "../UI/Button.jsx";
import NavCard from "./NavCard.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <nav className="w-full bg-white flex justify-center shadow-md">
      <div className="container-1200 flex justify-between p-3 items-center">
        <img
          src="https://codelynks.com/wp-content/uploads/2024/07/logo.svg"
          alt="logo"
          className="className={`w-[100px] h-[40px] sm:w-[150px] sm:h-[55px] lg:w-[200px] lg:h-[65px] transition-all duration-500"
        />

        <div
          className={`flex flex-col gap-8 md:flex-row md:items-center text-gray-800 md:z-auto md:static w-full md:w-auto pl-9 transition-all duration-500 ease-in ${
            showMenu ? "top-16" : "top-[-490px]"
          }`}
        >
          {headerLinks?.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                className="text-md font-medium group"
                to={item.url}
                style={({ isActive }) => ({
                  color: (isActive && ["/", "/about-us"].includes(item.url)) ? "#36c0fa" : "gray",
                })}
                onClick={() => setShowMenu(false)}
              >
               
                  <div className="flex justify-center gap-2 items-center">
                    <span className="hover:text-[#36c0fa]">{item.title}</span>
                    {item?.subMenu && (
                      <div className="w-2 h-2 rounded bg-primary"></div>
                    )}
                  </div>
              
              </NavLink>

              {item.subMenu && hoveredItem === item.title && (
                <div className="sub-menu absolute top-[40px] -left-[140px] bg-white shadow-lg rounded-md py-2 md:w-[400px]">
                  {item.subMenu && hoveredItem === item.title && <NavCard navItem={item}/>}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
