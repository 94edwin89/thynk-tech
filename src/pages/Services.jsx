import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import serviceImg1 from "../assets/images/service_img_1.jpg";
import serviceImg2 from "../assets/images/service_web_dev.png";

const Services = () => {
  const params = useParams();

  return (
    <div className="page-container flex flex-col">
      {/* Header Section */}
      <div className="container-1200 grid grid-cols-1 md:grid-cols-2 gap-7 items-center mx-auto">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="header-3">
            We Build Software Solutions That Solve Our Clients Business
            Challenges
          </h3>
          <p className="text-lg dark-text">
            Our custom software development service is designed to help
            businesses build tailored solutions that meet their unique needs.
            Whether you require desktop applications, mobile apps, or enterprise
            systems, we ensure scalable, robust, and future-proof software.
          </p>
        </motion.div>

        <motion.img
          src={serviceImg1}
          alt="Service Image"
          className="w-full h-full md:h-[450px] md:w-[650px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Our Services Section */}
      {/* web dev */}
      <div className="flex flex-col gap-10 my-20">
        <div className="container-1200 mx-auto flex-flex-col gap-8">
          <motion.h3
            className="header-3 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center my-10">
            <motion.img
              src={serviceImg2}
              alt="Service Image"
              className="w-full h-full md:h-[400px] md:w-[450px] object-cover"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="header-3">
                <span className="text-primary">Web Development:</span> Building
                Exceptional Online Experiences
              </h3>
              <p className="text-lg dark-text">
                At ThynkTechnologies, we specialize in creating responsive,
                user-centric, and secure websites that deliver a seamless
                experience across all devices. Whether you need a simple landing
                page, a complex eCommerce platform, or a custom web application,
                our team is committed to delivering high-quality web solutions
                tailored to your business goals.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Web dev details section */}
        <div className="dark-bg py-8">
          <div className="container-1200 mx-auto flex flex-col">
            <motion.h4
              className="header-4 text-center text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Our <span className="italic"> Web Development </span>
              Works
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div>
                <img/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
