import { HiArrowRight, HiOutlineThumbUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import svg from "../../../assets/svgs/lines-bg.svg";

function LandingOne() {
  return (
    <section
      className=" p-8 rounded-lg flex flex-col lg:ml-[15rem]  items-center pt-[180px] relative"
      style={{ backgroundColor: "white" }}
    >
      <img src={svg} className="absolute left-[3%]  w-[43%]" />
      <img src={svg} className="absolute right-[3%]  w-[43%] rotate-180" />

      <div className="z-[1] flex flex-col mb-8 w-full max-w-4xl items-center text-center md:items-start md:text-left px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
          <span className="font-light">We want your</span>
          <br />
          <span className="text-primary">
            <span className="font-light primary">idea to</span>{" "}
            <strong>succeed</strong>
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6 font-light text-base sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center md:justify-start gap-2">
          <HiArrowRight /> To avail our services and know us better
        </p>
      </div>

      {/* <div className=" grid grid-flow-col gap-5">
        <div className="flex-1 flex flex-col items-center w-full mb-8">
          <div className="relative mb-6">
            <img
              src="public/landing.png" // Replace with your actual image URL
              alt="Team collaborating"
              className="w-[550px] h-[250px] rounded-lg object-cover"
            />

            <button className="w-[155px] font-bold h-[55px]  absolute bottom-[-1px] right-[-3px] bg-primary text-white py-2 px-4 rounded-md hover:bg-[#28b1eb]">
              <Link to="/contact-us"> REACH OUT</Link>
            </button>
          </div>
        </div>

        <div className="z-[1] flex-1 flex-row w-full  h-[250px] bg-gray-100 p-6 rounded-lg shadow text-center">
          <div className="text-primary text-3xl mb-4 z-[10]">
            <HiOutlineThumbUp />
          </div>

          <p className="text-gray-700 font-medium">
            satisfied clients
            <br /> and counting - join
            <br /> our success story!
          </p>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* Image Section */}
  <div className="flex flex-col items-center w-full mb-8">
    <div className="relative mb-6">
      <img
        src="public/landing.png" // Replace with your actual image URL
        alt="Team collaborating"
        className="w-full max-w-[550px] h-[200px] sm:h-[250px] rounded-lg object-cover"
      />
      <button className="w-[155px] font-bold h-[55px] absolute bottom-[-1px] right-[-3px] bg-primary text-white py-2 px-4 rounded-md hover:bg-[#28b1eb]">
        <Link to="/contact-us"> REACH OUT</Link>
      </button>
    </div>
  </div>

  {/* Text Section */}
  <div className="z-[1] flex flex-col justify-center items-center md:items-start w-[250px] h-[250px] bg-gray-100 p-6 rounded-lg shadow text-center md:text-left">
    <div className="text-primary text-3xl mb-4">
      <HiOutlineThumbUp />
    </div>
    <p className="text-gray-700 font-medium leading-relaxed">
      Satisfied clients
      <br /> and counting - join
      <br /> our success story!
    </p>
  </div>
</div>

    </section>
  );
}

export default LandingOne;
