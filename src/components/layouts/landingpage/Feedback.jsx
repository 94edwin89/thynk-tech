import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feedback1 from "../../../assets/images/web_dev_1.jpg";
import feedback2 from "../../../assets/images/web_dev_2.jpg";
import feedback3 from "../../../assets/images/web_dev_5.jpg";
import feedback4 from "../../../assets/images/web_dev_8.jpg";
import godsonShaji from "../../../assets/images/feedback/IMG_9851.JPG";
import sooraj from "../../../assets/images/feedback/IMG_9854.jpg";
import markDavis from "../../../assets/images/feedback/IMG_9852.jpg";
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-6 bg-gray-100">
      <h2 className="text-primary text-2xl font-thin text-center mb-6">
        Testimonials
      </h2>
      <h1 className="text-center font-thin text-6xl">What they are talking about us</h1>
      <div className="overflow-hidden w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {feedbacks.slice(index, index + 2).map((feedback) => (
              <div
                key={feedback.id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex w-full h-[250px]"
              >
                <div className="w-1/3 h-full">
                  <div className="flex items-center flex-col mt-3 text-sm text-gray-500">
                    <img
                      className="w-40 h-40 rounded-full mr-2"
                      src={feedback.image}
                      alt={feedback.name}
                    />
                    <span className="font-medium">{feedback.name}</span>
                    <span className="mx-2">•</span>
                    <span className="text-xs">{feedback.role}</span>
                  </div>
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <span className="text-center">{feedback.brand}</span>
                  <hr />
                  <h2 className="text-md text-center  font-thin text-gray-800">
                    &quot;{feedback.feedback}&quot;
                  </h2>
                  <hr />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Indicator Dots */}
        <br />
        <br />
        <br />
        <div className="flex justify-center mt-4 space-x-2 absolute bottom-2 left-1/2 transform -translate-x-1/2">
          {Array.from({ length: Math.ceil(feedbacks.length / 2) }).map(
            (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  index / 2 === i ? "bg-gray-600" : "bg-gray-400"
                }`}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
