import React from "react";
import "./String.css";

const technologies = [
  "Website", "E-Commerce", "Portfolio", "SQL", "noSQL", "DOCKER",
  "mobile application", "SEO", "server side rendering", "client side rendering"
];

const String = () => {
  return (
    <div className="string mb-10">
      <div className="string-slide">
        {/* Duplicated content to ensure seamless looping */}
        {[...technologies, ...technologies].map((tech, index) => (
          <span key={index} className="string-text">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default String;
