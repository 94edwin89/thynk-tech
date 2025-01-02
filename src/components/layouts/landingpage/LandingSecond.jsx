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
        <div>
          <img
            className="rounded-3xl w-[350px] h-[550px]"
            src="https://via.placeholder.com/400x250"
            alt="400x400"
          />
        </div>

        <div>
          <div className="grid grid-flow-col gap-4">
            <div>
              <p className="text-blue-400 font-extrabold pt-8">WHO WE ARE</p>
              <h1 className="text-6xl">
                We provide
                <br />
                custom IT solution for
                <br />
                <span className="flex">
                  your business{" "}
                  <HiArrowCircleUp className=" text-blue-600 rotate-45" />
                </span>
              </h1>
              <p className="mt-3">
                We create profitable applications for your business or clients,
                <br /> ensuring an exceptional user experience that boosts
                customer
                <br />
                retention and satisfaction. Our enterprise-class software
                <br /> engineering techniques guarantee data security and
                integrity.
              </p>
            </div>

            <div className="mt-[80px]">
              <img
                className="rounded-3xl"
                src="https://via.placeholder.com/400x250"
                alt="400x400"
              />
            </div>
          </div>

          <div className="flex justify-evenly p-6">
            <div>
              <h1 className="text-4xl">
                <HiOutlineFaceSmile className="text-blue-500" />
                Happy Clients
              </h1>
              <p>
                satisfied clients and counting
                <br />- join our success story!
              </p>
            </div>
            <div>
              <h1 className="text-4xl">
                <HiCalendarDateRange className=" text-blue-500" /> Experience
              </h1>
              <p>
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
