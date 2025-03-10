import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { headerLinks } from "../../constants/constants.js";
import Button from "../UI/Button.jsx";
import NavCard from "./NavCard.jsx";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const [hideMenu, setHideMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const location = useLocation()?.pathname;

  const handleMenuClick = () => {
    if (showMenu) {
      setHideMenu(true);
      // for delaying the style changes
      setTimeout(() => {
        setShowMenu(false);
        setHideMenu(false);
      }, 300);
    } else {
      setShowMenu(true);
    }
  };

  const handleShowSubmenu = (item) => {
    if (!item.subMenu){
      window.scrollTo(0,0);
      return;
    };

    if (hoveredItem === item.title) return setHoveredItem(null);

    setHoveredItem(item.title);
  };

  // Check scroll position and update the state for scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Header should have shadow and be fixed
      } else {
        setIsScrolled(false); // Header should not have shadow and fixed positioning
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
    setHideMenu(false);
  }, [location]);

  return (
    <nav
      className={`w-full bg-white flex justify-center py-2 sm:py-1 transition-all duration-300 ease-in ${
        isScrolled ? "fixed top-0 shadow-md z-50" : "absolute z-50"
      }`}
    >
      <div className="container-1200 flex justify-between p-3 items-center">
        <Logo />
        <div
          className={`md:flex gap-8 md:items-center text-gray-800 md:z-auto md:static w-full md:w-[500px] pl-9 transition-all duration-300 ease-in ${
            showMenu && !hideMenu
              ? "mobile-menu-container"
              : "absolute -top-[540px]"
          }`}
        >
          {headerLinks?.map((item) => (
            <div
              key={item.title}
              className={`relative w-full ${showMenu && "first:mt-10"}`}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleShowSubmenu(item)}
            >
              <NavLink
                className="text-md font-medium"
                to={item.url}
                style={({ isActive }) => ({
                  color:
                    isActive && ["/", "/about-us"].includes(item.url)
                      ? "#3d77da"
                      : "#333",
                })}
              >
                <div
                  className={`flex ${
                    showMenu ? "justify-between" : "justify-center gap-2"
                  } items-center`}
                >
                  <span className="hover:text-[#36c0fa]">{item.title}</span>
                  {item?.subMenu && (
                    <span className="w-2 h-2 rounded bg-primary"></span>
                  )}
                </div>
              </NavLink>

              {item.subMenu && hoveredItem === item.title && (
                <div
                  className={`${
                    !showMenu ? "sub-menu" : "mobile-sub-menu"
                  } bg-white py-2`}
                >
                  {item.subMenu && hoveredItem === item.title && (
                    <NavCard navItem={item} showMenu={showMenu} />
                  )}
                </div>
              )}
            </div>
          ))}
          {showMenu && (
            <IoClose
              size={32}
              color="#333"
              className="block absolute right-3 top-5 md:hidden"
              onClick={handleMenuClick}
            />
          )}
        </div>
        <div className="flex gap-5 justify-center items-center">
          <Button>
            <Link to="/contact-us" className="text-white" onClick={() => window.scrollTo(0,0)}>Contact Us</Link>
          </Button>
          <TiThMenu
            size={28}
            color="#333"
            className="block md:hidden"
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
