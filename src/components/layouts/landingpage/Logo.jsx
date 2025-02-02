import React, { useEffect, useRef } from 'react';
import './Logo.css';  // Import your CSS styles
import android from "../../../assets/images/ourservices/android.png";
import angular from "../../../assets/images/ourservices/angular.png";
import flutter from "../../../assets/images/ourservices/flutter.png";
import html from "../../../assets/images/ourservices/html.jpeg";
import ios from "../../../assets/images/ourservices/ios.png";
import js from "../../../assets/images/ourservices/js.png";
import php from "../../../assets/images/ourservices/php.png";
import python from "../../../assets/images/ourservices/python.png";
import react from "../../../assets/images/ourservices/react.png";
import uiux from "../../../assets/images/ourservices/uiux.png";

// Array of images (static data)
const logos= [
  android,
  angular,
  flutter,
  html,
  ios,
  js,
  php,
  python,
  react,
  uiux,
];

const Logo = () => {
  const logosSlideRef = useRef(null);

  useEffect(() => {
    // Cloning the logos slide on mount
    const logosSlide = logosSlideRef.current;
    const clone = logosSlide.cloneNode(true);
    logosSlide.parentNode.appendChild(clone);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide" ref={logosSlideRef}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Logo;
