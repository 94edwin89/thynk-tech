import React from "react";
import { Link } from "react-router-dom";
import {
  socialMediaLinks,
  quickLinks,
  serviceLinks,
} from "../../constants/constants.js";
import indFlag from "../../assets/images/indflag.png";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="dark-bg h-auto py-5">
      <div className="container-1200 mx-auto flex flex-col gap-3">
        {/* Logo and social Media Links */}
        <div className="flex flex-wrap justify-between items-center">
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

        {/* LINKS   */}
        <div className="flex flex-wrap justify-between mt-8 gap-6">
          {/* Quick links */}
          <div className="flex flex-col gap-5">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Quick Links
            </h6>
            <ul className="light-text">
              {quickLinks?.map((link) => (
                <li
                  key={link?.title}
                  className="my-2 hover:text-white font-semibold text-[15px]"
                >
                  <Link to={link.url}>{link?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Services
            </h6>
            <ul className="light-text">
              {serviceLinks?.map((link) => (
                <li
                  key={link?.title}
                  className="my-2 hover:text-white font-semibold text-[15px]"
                >
                  <Link to={link.url}>{link?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-5">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Get In Touch
            </h6>
            <ul className="light-text w-full md:max-w-[260px]">
              <li className="flex gap-2 my-2 hover:text-white text-[15px]">
                <img src={indFlag} alt="India Flag" />
                <a href="tel:+914844026866" className="hover:text-white">
                  (+91) 484-402-6866
                </a>
              </li>

              <li className="text-wrap text-[15px] font-semibold">
                <strong>INDIA</strong>: Office No.10-B1, Trans Asia Cyber Park,
                Infopark SEZ Phase-II, Ambalamedu, P.O, Kochi, Kerala 682303
              </li>
            </ul>
          </div>
          {/* Subscibe to the Email */}
          <div className="flex flex-col gap-5 w-full md:max-w-[280px]">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Newsletter
            </h6>
            <h6 className="light-text hover:text-white text-md font-semibold text-wrap">
              Subscribe to our newsletter for latest updates
            </h6>
            <div className="flex justify-between p-2 border-0 border-b border-b-gray-500">
              <input
                type="email"
                className="bg-inherit border-none outline-none text-white"
              />
              <FaArrowRight className="text-primary" size={20} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-6 flex-wrap gap-5">
          <p className="light-text text-center text-sm">
           Copyright &copy; thynktechnologies.com  {" "}
            {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="light-text text-sm text-center sm:text-right w-full sm:w-1/2">
              <a href="/" className="hover:text-white mr-1">Terms of Use</a>
              {" "}| {" "}
              <a href="/" className="hover:text-white ml-1">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
