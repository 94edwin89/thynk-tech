import React from "react";
import { Link } from "react-router-dom";
import { socialMediaLinks } from "../../constants/constants.js";



const Footer = () => {
  return (
    <div className="dark-bg h-auto py-5">
      <div className="container-1200 mx-auto flex flex-col gap-3">
        {/* Logo and social Media Links */}
        <div className="flex justify-between items-center">
          {/* image */}
          <img
            src="https://codelynks.com/wp-content/uploads/2024/07/logo.svg"
            alt="logo"
            className="w-[150px] h-[55px]"
          />
          {/* follow us */}
          <div className="flex items-center gap-8">
            <p className="uppercase light-text font-semibold hover:text-white">
              Follow Us :{" "}
            </p>
            <div className="flex items-center gap-5">
              {socialMediaLinks?.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  className="light-bg rounded-full p-2 group hover:bg-primary transition-colors duration-200"
                >
                  <link.icon
                    size={16}
                    className="dark-text group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="light-text border-t" />
      </div>
    </div>
  );
};

export default Footer;
