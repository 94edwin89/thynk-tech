import React from 'react'
import { NavLink } from 'react-router-dom'

const NavCard = ({ navItem, showMenu }) => {
    return (
      <div className={`${showMenu ? "mt-3" : "p-3 w-100"}`}>
        <h3 className={`${showMenu ? "" : "mx-4"} text-gray-600 mb-4 uppercase text-sm`}>{navItem.title}</h3>
        <hr/>
        <div className="space-y-2">
          {navItem.subMenu.map((subItem) => (
            <NavLink
              key={subItem.title}
              to={subItem.url}
              className="flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="p-2 bg-blue-50 rounded-lg">
                <subItem.icon className="w-6 h-6 text-[#36c0fa]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{subItem.title}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  {subItem.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

export default NavCard