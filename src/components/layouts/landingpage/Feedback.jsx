import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import feedback1 from "../../../assets/images/web_dev_1.jpg";
import feedback2 from "../../../assets/images/web_dev_2.jpg";
import feedback3 from "../../../assets/images/web_dev_5.jpg";
import feedback4 from "../../../assets/images/web_dev_8.jpg";
import godsonShaji from "../../../assets/images/feedback/IMG_9851.JPG";
import sooraj from "../../../assets/images/feedback/IMG_9852.jpg";
import markDavis from "../../../assets/images/feedback/IMG_9854.jpg";
import lisaBrown from "../../../assets/images/feedback/IMG_9853.jpg";

const feedbacks = [
  {
    id: 1,
    brand: "POPPIE HAIR AND MAKEUP",
    name: "GODSON SHAJI",
    role: "Hair & Makeup Artist",
    image: godsonShaji,
    feedback:
      "As a hair and makeup artist, I know the power of a flawless presentation, and your portfolio reflects just that! The clean design, elegant visuals, and user-friendly interface make it a masterpiece.",
    portfolioImage: feedback1,
  },
  {
    id: 2,
    brand: "QUALITY FISH NETS",
    name: "SOORAJ",
    role: "Fishing Net Manufacturer",
    image: sooraj,
    feedback:
      "Your website design is absolutely stunning! It flows beautifully, is easy to navigate, and presents your work in an elegant way. Truly an outstanding showcase of your skills!",
    portfolioImage: feedback2,
  },
  {
    id: 3,
    name: "MARK DAVIS",
    brand: "The wild Oasis",
    role: "Resort room bookings",
    image: markDavis,
    feedback:
      "The room booking website offers a seamless and hassle-free experience with an intuitive design that makes reservations effortless. Navigation is smooth, allowing users to find and book their ideal stay quickly. With a secure and user-friendly interface, the platform ensures a stress-free booking process.",
    portfolioImage: feedback3,
  },
  {
    id: 4,
    name: "LISA BROWN",
    brand: "Traveller's choice",
    role: "travel & tourism",
    image: lisaBrown,
    feedback:
      "Your web development skills are truly impressive! The website is beautifully designed, highly responsive, and offers a seamless user experience. The attention to detail, smooth navigation, and flawless functionality showcase your expertise and creativity.",
    portfolioImage: feedback4,
  },
];

const Feedback = () => {
  const [visible, setVisible] = useState(2);
  const [rotated, setRotated] = useState(false);

  const handleLoadMore = () => {
    setRotated(true);
    setTimeout(() => setRotated(false), 1000);
    setVisible((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setRotated(true);
    setTimeout(() => setRotated(false), 1000);
    setVisible(2);
  };

  return (
    <div className="w-full h-full p-6 bg-gray-100">
      <h2 className="text-primary text-2xl font-thin text-center mb-6">
        Testimonials
      </h2>
      <h1 className="text-center text-6xl">What they are talking about us</h1>

      {/* Feedback Cards with slow Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {feedbacks.slice(0, visible).map((feedback) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2 }} // Slower transition
              className="bg-white shadow-md rounded-lg overflow-hidden flex w-full h-[250px]"
            >
              {/* Left Side - Image */}
              <div className="w-1/3 h-full">
                <img
                  className="h-full w-full object-cover"
                  src={feedback.portfolioImage}
                  alt="Portfolio"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <span>{feedback.brand}</span>
                <hr className="border-primary" />
                <h2 className="text-md text-center pt-2 font-thin text-gray-800">
                  &quot;{feedback.feedback}&quot;
                </h2>
                <hr className="border-primary" />
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <img
                    className="w-6 h-6 rounded-full mr-2"
                    src={feedback.image}
                    alt={feedback.name}
                  />
                  <span className="font-medium">{feedback.name}</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">{feedback.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More & Show Less Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        {visible < feedbacks.length && (
          <button
            onClick={handleLoadMore}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FaChevronDown
              className={`text-lg transform transition-transform duration-1000 ${
                rotated ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
        {visible > 2 && (
          <button
            onClick={handleShowLess}
            className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition flex items-center justify-center"
          >
            <FaChevronUp
              className={`text-lg transform transition-transform duration-1000 ${
                rotated ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Feedback;
