import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Expertise.css";
import logoWhite from "../../../assets/images/logos/logo_white.png";
import ios from '../../../assets/images/ourservices/ios.jpeg'
import php from '../../../assets/images/ourservices/php.png'
import javascript from '../../../assets/images/ourservices/js.jpeg'
import html from '../../../assets/images/ourservices/html.jpeg'
import uxui from '../../../assets/images/ourservices/uiux.png'
import react from '../../../assets/images/ourservices/react.png'
import angular from '../../../assets/images/ourservices/angular.png'
import flutter from '../../../assets/images/ourservices/flutter.png'
import android from '../../../assets/images/ourservices/android.png'
import python from '../../../assets/images/ourservices/python.png'

function OurExpertise() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time the section comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const technologies = [
    { name: "Android", icon: android },
    { name: "iOS", icon: ios },
    { name: "PHP", icon: php},
    { name: "JavaScript", icon: javascript},
    { name: "HTML", icon: html},
    { name: "UX/UI", icon: uxui},
    { name: "React", icon: react},
    { name: "Angular", icon: angular},
    { name: "Flutter", icon: flutter},
    { name: "Python", icon: python},
  ];

  return (
    <div
      className="expertise-container relative h-screen w-full overflow-hidden"
      ref={ref}
      style={{ backgroundColor: "white" }}
    >
      {/* Heading Section */}
      <div className="grid grid-flow-row gap-4">
        <h1 className="p-8 text-center text-6xl text-gray-600">
          Our Expertise
        </h1>
        <p className="sm:text-xs text-center pb-8">
          Rely on our extensive technical expertise in web development,
          E-commerce, mobile application, SEO, and cloud computing to deliver
          tailored solutions for your business needs and
          <br /> drive your success forward.
        </p>
      </div>

      {/* Icons Container */}
      <div className="relative w-full h-[500px] m-auto overflow-hidden">
        {/* Centered Icon */}
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={logoWhite}
            alt="Thynk Technologies"
            className=" w-[150px] h-[150px] rounded-full shadow-xl overflow-hidden bg-primary"
            style={{
              boxShadow: "0 0 8px 8px rgba(0, 0, 0, 0.3)", // Fading gray glow ring effect
              outline: "none", // Remove focus outline ring
            }}
          />
        </div>

        {/* Spread Icons Container */}
        <div className="absolute inset-0">
          {technologies.map((tech, index) => {
            // Define fixed positions for scattered icons
            const positions = [
              { top: "10%", left: "10%" },
              { top: "0%", left: "80%" },
              { top: "40%", left: "20%" },
              { top: "70%", left: "80%" },
              { top: "30%", left: "30%" },
              { top: "0%", left: "50%" },
              { top: "70%", left: "30%" },
              { top: "37%", left: "70%" },
              { top: "60%", left: "10%" },
              { top: "70%", left: "60%" },
            ];

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: positions[index]?.top,
                  left: positions[index]?.left,
                }}
                initial={{ opacity: 0, y: 100 }} // Start below and invisible
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate on scroll up/down
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className=" w-14 lg:w-24 h-auto rounded-full shadow-xl overflow-hidden "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;
