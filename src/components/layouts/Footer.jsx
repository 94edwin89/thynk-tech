import React from "react";
import { Link } from "react-router-dom";
import {
  socialMediaLinks,
  quickLinks,
  serviceLinks,
} from "../../constants/constants.js";
import indFlag from "../../assets/images/indflag.png";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <div className="dark-bg h-auto py-5">
      <div className="container-1200 mx-auto flex flex-col gap-3">
        {/* Logo and social Media Links */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center">
          {/* image */}
          <Logo footer={true}/>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between mt-8 gap-6">
          {/* Quick links */}
          <div className="flex flex-col gap-5">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Quick Links
            </h6>
            <ul className="light-text">
              {quickLinks?.map((link) => (
                <li
                  key={link?.title}
                  className="my-2 hover:text-white font-semibold text-[13px] sm:text-[15px]"
                >
                  <Link to={link.url} onClick={() => window.scrollTo(0, 0)}>{link?.title}</Link>
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
                  className="my-2 hover:text-white font-semibold text-[13px] sm:text-[15px]"
                >
                  <Link to={link.url}>{link?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="hidden sm:flex flex-col gap-5">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Get In Touch
            </h6>
            <ul className="light-text w-full md:max-w-[260px]">
              <li className="flex gap-2 my-2 hover:text-white text-[15px]">
                <img src={indFlag} alt="India Flag" />
                <a href="tel:+914844026866" className="hover:text-white">
                  +91 94008 01182
                </a>
              </li>

              <li className="text-wrap text-[15px] font-semibold">
                <strong>INDIA</strong>: HS no.156, ward 3, chundale-post, wayanad ,kerala -673123
              </li>
            </ul>
          </div>
          {/* Subscibe to the Email */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 flex flex-col gap-5 w-full md:max-w-[280px]">
            <h6 className="uppercase extra-light-text  text-md font-semibold">
              Newsletter
            </h6>
            <h6 className="light-text hover:text-white text-[13px] sm:text-[15px] font-semibold text-wrap">
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
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-5 w-full">
          <p className="light-text text-center text-sm">
           Copyright &copy; thynktechnologies.com  {" "}
            {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="light-text text-sm text-center sm:text-right w-full sm:w-1/2">
              <a href="/terms-of-use" target="_blank" className="hover:text-white mr-1 text-[13px] sm:text-[15px]">Terms of Use</a>
              {" "}| {" "}
              <a href="/privacy-policy" target="_blank" className="hover:text-white ml-1 text-[13px] sm:text-[15px]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
