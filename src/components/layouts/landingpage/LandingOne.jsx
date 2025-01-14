import { HiArrowRight, HiOutlineThumbUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import svg from "../../../assets/svgs/lines-bg.svg";

function LandingOne() {
  return (
    <section
      className=" p-8 rounded-lg flex flex-col items-center pt-[110px] h-[100vh] relative"
      style={{ backgroundColor: "white" }}
    >
      <img src={svg} className="absolute left-[3%]  w-[43%]" />
      <img src={svg} className="absolute right-[3%]  w-[43%] rotate-180" />

      <div className="flex flex-col mb-8 w-full max-w-4xl items-center text-center md:text-left p-8">
        <h1 className="lg:text-7xl font-bold text-gray-800 mb-4">
          <span className="font-light">We want your</span>
          <br />{" "}
          <span className="text-primary">
            <span className="font-light primary">idea to</span>{" "}
            <strong>succeed</strong>
          </span>
        </h1>

        <p className="text-gray-600 mb-6 font-light  lg:text-2xl flex items-center justify-center md:justify-start">
          <HiArrowRight /> To avail our services and know us better
        </p>
      </div>

      <div className=" sm:grid lg:grid-flow-col  gap-5">
        <div className="flex-1 flex flex-col items-center w-full mb-8">
          <div className="relative mb-6">
            <img src="public/landing.png" alt="Team collaborating" />

            <button className="lg:w-[195px] font-bold lg:h-[65px] absolute bottom-[-1px] right-[-3px] bg-primary text-white py-2 px-4 rounded-xl hover:bg-[#28b1eb]">
              <Link to="/contact-us"> REACH OUT</Link>
            </button>
          </div>
        </div>

        <div className="reletive z-10 flex-1 flex-row lg:w-[full] lg:h-[280px]  bg-gray-100 p-6 rounded-lg shadow text-center">
          <div className="text-primary text-3xl mt-9 mb-4">
            <HiOutlineThumbUp />
          </div>

          <p className="text-gray-700 font-medium">
            satisfied clients
            <br /> and counting - join
            <br /> our success story!
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingOne;
