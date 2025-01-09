import React, { useEffect, useRef, useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiCalendarDateRange, HiOutlineFaceSmile } from "react-icons/hi2";

function LandingSecond() {
  const [isVisible, setIsVisible] = useState(false); // Tracks visibility
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`transition-all duration-700 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 bg-gray-50"
          : "opacity-0 translate-y-10 bg-gray-900"
      }`}
    >
      <div className="grid grid-flow-col gap-2 p-9 bg-gray-900 text-gray-200">
        <div >
          <img
            className="sm:h-[200px] overflow-hidden w-[450px] h-[550px]"
            src="public/office-image.png"
            alt="400x400"
          />
        </div>

        <div>
          <div className="grid grid-flow-col gap-4">
            <div>
              <p className="text-primary sm:text-xl md:text-2xl lg:text-3xl font-extrabold pt-8">WHO WE ARE</p>
              <h1 className="sm:text-2xl md:text-3xl lg:text-6xl">
                We provide
                <br />
                custom IT solution for
                <br />
                <span className="flex">
                  your business{" "}
                  <HiArrowCircleUp className=" text-primary rotate-45" />
                </span>
              </h1>
              <p className="mt-3 sm:text-xm text-justify hyphens-auto">
                We create profitable applications for your business or clients,
                <br /> ensuring an exceptional user experience that boosts
                customer
                <br />
                retention and satisfaction. Our enterprise-class software
                <br /> engineering techniques guarantee data security and
                integrity.
              </p>
            </div>

            <div className="sm:w-2 sm:h-3 mt-[80px] lg:w-[200px]">
              <img src="public/employee.png" alt="400x400" />
            </div>
          </div>

          <div className="flex justify-evenly p-6">
            <div>
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl">
                <HiOutlineFaceSmile className="text-primary" />
                Happy Clients
              </h1>
              <p className="text-sm">
                satisfied clients and counting
                <br />- join our success story!
              </p>
            </div>
            <div>
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl">
                <HiCalendarDateRange className=" text-primary" /> Experience
              </h1>
              <p className="text-sm">
                Developers experience delivering
                <br />
                top-quality solutions - trust us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSecond;
