import React from "react";
import { HiArrowRight, HiOutlineThumbUp } from "react-icons/hi";

function Home(){
  return (
    <section className="bg-gray-50 p-8 rounded-lg flex flex-col items-center pt-[110px]">
      <div className="flex flex-col mb-8 w-full max-w-lg text-center md:text-left">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">
          <span className="font-light">We want your</span>
          <br />{" "}
          <span className="text-blue-500">
            <span className="font-light">idea to</span> <strong>succeed</strong>
          </span>
        </h1>

        <p className="text-gray-600 mb-6 font-light text-2xl flex items-center justify-center md:justify-start">
          <HiArrowRight /> To avail our services and know us better
        </p>
      </div>

      <div className=" grid grid-flow-col gap-5">
        <div className="flex-1 flex flex-col items-center w-full mb-8">
          <div className="relative mb-6 w-full max-w-md">
            <img
              src="https://via.placeholder.com/400x250" // Replace with your actual image URL
              alt="Team collaborating"
              className="w-full h-auto rounded-lg object-cover"
              style={{
                clipPath:
                  "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
              }}
            />

            <button className="absolute bottom-[-4px] right-[-3px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 border-4 border-gray-50 ring-4 ring-gray-50">
              REACH OUT
            </button>
          </div>
        </div>

        <div className="flex-1 flex-row w-full h-[250px] bg-gray-100 p-6 rounded-lg shadow text-center">
          <div className="text-blue-500 text-3xl mb-4">
            <HiOutlineThumbUp />
          </div>

          <p className="text-gray-700 font-medium">
            30+ satisfied clients
            <br /> and counting - join
            <br /> our success story!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
