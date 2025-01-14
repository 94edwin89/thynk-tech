import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import serviceImg1 from "../assets/images/service_img_1.jpg";
import serviceImg2 from "../assets/images/service_web_dev.png";
import serviceImg3 from "../assets/images/service_app_dev.png";
import serviceImg4 from "../assets/images/service_seo.png";

import serviceDevelopment from "../assets/images/service_development.png"

import { webDevServices } from "../constants/constants";
import ServiceCard from "../components/services/ServiceCard";
import ServicesSwiper from "../components/services/ServiceSwiper";

const Services = () => {
  const id = useParams().id;

  // for moving the area based on the id.
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [id]);

const generateMotionStyles = (right=false) => {

    return {
      initial: { opacity: 0, x : right ? 100 : -100},
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 1 },
    }
  };

  return (
    <div className="page-container flex flex-col overflow-hidden" id="web-dev">
      {/* Header Section */}
      <div className="container-1200 grid grid-cols-1 md:grid-cols-2 gap-7 items-center mx-auto px-2">
        <motion.div
          className="flex flex-col gap-8 px-4"
          {...(generateMotionStyles())}
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
          className="service-img"
          {...(generateMotionStyles(true))}
        />
      </div>

      {/* Our Services Section */}
      {/* web dev */}
      <div className="flex flex-col gap-10 sm:mt-20 my-5 sm:my-10">
        <div className="container-1200 mx-auto flex-flex-col gap-8 px-2">
          <motion.h3
            className="header-3 text-center"
            initial={{ opacity: 0, scale:0.8 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 3 }}
          >
            Our Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center my-10">
            <motion.img
              src={serviceImg2}
              alt="Service Image"
              className="service-img"
              {...(generateMotionStyles())}
            />
            <motion.div
              className="flex flex-col gap-8 px-4"
              {...(generateMotionStyles(true))}
            >
              <h3 className="header-3">
                <span className="text-primary">Web Development:</span> Building
                Exceptional Online Experiences
              </h3>
              <p className="text-lg dark-text">
              <span className="text-4xl text-primary">A</span>t ThynkTechnologies, we specialize in creating responsive,
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
        <div className="flex bg-gradient-to-r from-slate-700 to-green-100 w-full justify-between items-center py-14">
          <img src={serviceDevelopment} className="mx-auto w-3/4 h-auto" />
        </div>
      </div>

      {/* App Dev */}
      <div id="app-dev" className="flex flex-col gap-10 sm:py-10">
        <div className="container-1200 mx-auto flex-flex-col gap-8 px-2 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <motion.div
              className="flex flex-col gap-8 px-4"
              {...(generateMotionStyles())}
            >
              <h3 className="header-3">
                <span className="text-primary">App Development:</span>{" "}
                Empowering Your Digital Transformation
              </h3>
              <p className="text-lg dark-text">
                <span className="text-4xl text-primary">A</span>t ThynkTechnologies, we specialize in building cutting-edge
                mobile applications that offer exceptional user experiences
                across platforms. From intuitive design to seamless
                functionality, our team creates high-performance apps tailored
                to your business needs.
              </p>
            </motion.div>
            <motion.img
              src={serviceImg3}
              alt="Service Image"
              className="service-img"
              {...(generateMotionStyles(true))}
            />
          </div>
        </div>
        {/* full dev details section */}
        <div className="dark-bg py-8 px-2">
          <div className="container-1200 mx-auto flex flex-col">
            <motion.h4
              className="header-4 text-center text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              What We've Done
            </motion.h4>
            <ServicesSwiper webDevServices={webDevServices}/>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div id="seo" className="flex flex-col gap-10 py-10">
        <div className="container-1200 mx-auto flex-flex-col gap-8 px-2 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <motion.img
              src={serviceImg4}
              alt="Service Image"
              className="service-img"
              {...(generateMotionStyles())}
            />
            <motion.div
              className="flex flex-col gap-8 px-4"
              {...(generateMotionStyles(true))}
            >
              <h3 className="header-3">
                <span className="text-primary">SEO Services:</span> Boosting
                Your Online Visibility
              </h3>
              <p className="text-lg dark-text">
              <span className="text-4xl text-primary">A</span>t ThynkTechnologies, we specialize in enhancing your online
                presence through expert SEO strategies designed to improve your
                website's ranking on search engines. Our team employs a
                combination of on-page optimization, technical SEO, and quality
                content strategies to drive organic traffic and increase
                conversions.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Web dev details section */}
        {/* <div className="dark-bg py-8 px-2">
          <div className="container-1200 mx-auto flex flex-col">
            <motion.h4
              className="header-4 text-center text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Our <span className="italic"> App Development </span>
              Works
            </motion.h4>
            <div className="flex flex-wrap justify-center items-center md:gap-10">
              {webDevServices?.map((service) => (
                <ServiceCard key={service?.title} service={service} />
              ))}
            </div>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default Services;
