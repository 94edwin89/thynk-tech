import React, { useState } from "react";
import CountryCodeDropdown from "../components/UI/CountryCodeDropdown";
import ReactCountryFlag from "react-country-flag";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { TbLoader2 } from "react-icons/tb";

const ContactUs = () => {
  const [isMailSending, setIsMailSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    setIsMailSending(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data?.userName,
          to_name: "Thynk Technologies",
          from_email: data?.email,
          to_email: "info@thynktechnologies.com",
          message: data?.query,
          info: data?.info,
          mobile: data?.mobile,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Thank you. We will get back to you as soon as possible.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            customClass: {
              title: "custom-title",
              htmlContainer: "custom-text",
            },
          });
          form.reset();
          setIsMailSending(false);
        },
        (error) => {
          console.error(error);
          setIsMailSending(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page-container px-8 ml-8 pt-28 pb-8 bg-white">
      <h2 className="font-bold text-6xl mb-12">Let`s talk!</h2>
      <div className="contact-info flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
        <div className="contact-details text-gray-800">
          <p className="font-medium text-gray-500 mt-4">Landline</p>
          <p>
            <ReactCountryFlag
              countryCode="IN"
              svg
              style={{
                width: "1.2rem",
                height: "1rem",
                marginRight: "0.5rem",
              }}
            />
            +91 484 402 6866
          </p>
          <p className="font-medium mt-8 text-gray-500">Email</p>
          <p>info@thynktechnolagies.com</p>
        </div>
        <div className="contact-form w-full md:w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6 mt-4">
              <div className="relative">
                <input
                  type="text"
                  name="userName"
                  placeholder="Full Name*"
                  className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                  required
                />
              </div>
              <div className="relative mb-6 flex items-center gap-2 col-span-2 md:col-span-1">
                <CountryCodeDropdown />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black flex-grow outline-none"
                  required
                />
              </div>
              <div className="relative mb-6 flex items-center gap-2 col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="query"
                  placeholder="What are you looking for?"
                  className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                />
              </div>
            </div>
            <textarea
              placeholder="Additional Info"
              name="info"
              className="p-2 border-0 border-b focus:outline-none focus:ring-0 border-gray-300 rounded w-full mb-4"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 mt-4 rounded hover:bg-[#38a5d4]"
            >
              {isMailSending ? "Sending..." : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
