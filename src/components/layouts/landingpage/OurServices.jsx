// import React, { useEffect, useRef, useState } from "react";
// import Button from "../../UI/Button";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { TbSeo } from "react-icons/tb";
// import { HiDevicePhoneMobile } from "react-icons/hi2";
// import { MdOutlineWeb } from "react-icons/md";
// import { Link } from "react-router-dom";

// function LandingSecond() {
//   const [isVisible, setIsVisible] = useState(false); // Tracks visibility
//   const componentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 } // Trigger when 50% of the component is visible
//     );

//     if (componentRef.current) {
//       observer.observe(componentRef.current);
//     }

//     return () => {
//       if (componentRef.current) {
//         observer.unobserve(componentRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={componentRef}
//       className={`transition-all duration-700 ease-in-out ${
//         isVisible ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//       style={{
//         backgroundImage: `url('public/Background-our-services.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="grid grid-flow-col gap-2 p-9 bg-gray-500 bg-opacity-70 text-gray-200">
//         <div>
//           <div className="grid grid-flow-col gap-4 items-center pl-40">
//             <div>
//               <p className="text-primary font-extrabold pt-8">OUR SERVICES</p>
//               <h1 className="text-6xl">
//                 Explore our services
//                 <br />
//                 with just one click
//                 <br />
//               </h1>
//               <p className="mt-3">
//                 At our IT Services & Consulting company, we deliver tailored
//                 solutions <br /> to empower businesses and meet their technology
//                 aspirations. With a team <br /> of seasoned professionals, we
//                 specialize in turning challenges into <br /> opportunities,
//                 ensuring you gain the most from your tech investments <br />{" "}
//                 while fostering innovation. Here’s an overview of what we bring
//                 to the table:
//               </p>
//               <Button className="mt-4">
//                 <Link to="/services/web-dev">VIEW ALL SERVICES</Link>
//               </Button>
//             </div>
//             {/* --------------------------------------------------------------------------------- */}
//             <div className="-ml-[180px]  mt-[80px] grid grid-flow-col ">
//               {/* first section */}
//               <div className="-mt-[80px]">
//                 <div className="group bg-white flex flex-col items-center p-5 rounded-md w-[240px] mb-3 hover:bg-primary transition duration-300">
//                   <RiCustomerService2Fill className="text-6xl  text-primary group-hover:text-white" />
//                   <h1 className="text-2xl text-black group-hover:text-white">
//                     IT Infrastructure
//                   </h1>
//                   <p className="text-gray-600 text-sm group-hover:text-white">
//                     Empower your business with
//                     <br />
//                     scalable and secure IT infrastructure.
//                     <br />
//                     We deliver customized solutions
//                     <br />
//                     to streamline operations,
//                     <br />
//                     enhance productivity, and
//                     <br />
//                     drive sustainable growth.
//                   </p>
//                 </div>

//                 <div className="group bg-white flex flex-col items-center p-5 rounded-md w-[240px]  hover:bg-primary transition duration-300">
//                   <MdOutlineWeb className="text-6xl text-primary group-hover:text-white" />
//                   <h1 className="text-2xl text-black group-hover:text-white">
//                     Web Development
//                   </h1>
//                   <p className="text-gray-600 text-sm group-hover:text-white">
//                     Build robust, responsive, and
//                     <br />
//                     visually stunning websites. Our
//                     <br />
//                     web development solutions ensure
//                     <br />
//                     seamless performance and
//                     <br />
//                     exceptional user experience.
//                   </p>
//                 </div>
//               </div>

//               {/* second section */}
//               <div className="-ml-[80px] -mt-[30px]">
//                 <div className="group bg-white flex flex-col items-center p-5 rounded-md w-[240px] mb-3  hover:bg-primary transition duration-300">
//                   <HiDevicePhoneMobile className="text-6xl text-primary group-hover:text-white" />
//                   <h1 className="text-2xl text-black group-hover:text-white">
//                     Mobile Apps
//                   </h1>
//                   <p className="text-gray-600 text-sm group-hover:text-white">
//                     Transform your ideas into intuitive
//                     <br />
//                     mobile experiences. Our expert
//                     <br />
//                     team delivers user-friendly apps
//                     <br />
//                     that drive engagement and meet
//                     <br />
//                     your business goals.
//                   </p>
//                 </div>

//                 <div className="group bg-white flex flex-col items-center p-5 rounded-md w-[240px]  hover:bg-primary transition duration-300">
//                   <TbSeo className="text-6xl text-primary group-hover:text-white" />
//                   <h1 className="text-2xl text-black group-hover:text-white">
//                     SEO Services
//                   </h1>
//                   <p className="text-gray-600 text-sm group-hover:text-white">
//                     Unlock the potential of your online presence with
//                     <br />
//                     our expert SEO strategies. Drive
//                     <br />
//                     organic traffic, boost search
//                     <br />
//                     rankings, and grow your
//                     <br />
//                     business effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingSecond;
import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineWeb } from "react-icons/md";
import { Link } from "react-router-dom";

function LandingSecond() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
        isVisible ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: `url('public/Background-our-services.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid gap-4 p-6 sm:p-8 lg:p-12 bg-gray-500 bg-opacity-70 text-gray-200">
        <div className="text-center lg:text-left">
          <p className="text-primary font-extrabold pt-4 sm:pt-8">OUR SERVICES</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl">
            Explore our services
            <br />
            with just one click
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            At our IT Services & Consulting company, we deliver tailored
            solutions to empower businesses and meet their technology
            aspirations. With a team of seasoned professionals, we specialize
            in turning challenges into opportunities, ensuring you gain the most
            from your tech investments while fostering innovation. Here’s an
            overview of what we bring to the table:
          </p>
          <Button className="mt-4">
            <Link to="/services/web-dev">VIEW ALL SERVICES</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8 mt-10">
          {/* First column */}
          <div className="space-y-6">
            <div className="group bg-white flex flex-col items-center p-5 rounded-md hover:bg-primary transition duration-300">
              <RiCustomerService2Fill className="text-6xl text-primary group-hover:text-white" />
              <h1 className="text-xl lg:text-2xl text-black group-hover:text-white mt-2">
                IT Infrastructure
              </h1>
              <p className="text-gray-600 text-sm group-hover:text-white text-center">
                Empower your business with scalable and secure IT infrastructure.
                We deliver customized solutions to streamline operations,
                enhance productivity, and drive sustainable growth.
              </p>
            </div>

            <div className="group bg-white flex flex-col items-center p-5 rounded-md hover:bg-primary transition duration-300">
              <MdOutlineWeb className="text-6xl text-primary group-hover:text-white" />
              <h1 className="text-xl lg:text-2xl text-black group-hover:text-white mt-2">
                Web Development
              </h1>
              <p className="text-gray-600 text-sm group-hover:text-white text-center">
                Build robust, responsive, and visually stunning websites. Our
                web development solutions ensure seamless performance and
                exceptional user experience.
              </p>
            </div>
          </div>

          {/* Second column */}
          <div className="space-y-6">
            <div className="group bg-white flex flex-col items-center p-5 rounded-md hover:bg-primary transition duration-300">
              <HiDevicePhoneMobile className="text-6xl text-primary group-hover:text-white" />
              <h1 className="text-xl lg:text-2xl text-black group-hover:text-white mt-2">
                Mobile Apps
              </h1>
              <p className="text-gray-600 text-sm group-hover:text-white text-center">
                Transform your ideas into intuitive mobile experiences. Our
                expert team delivers user-friendly apps that drive engagement
                and meet your business goals.
              </p>
            </div>

            <div className="group bg-white flex flex-col items-center p-5 rounded-md hover:bg-primary transition duration-300">
              <TbSeo className="text-6xl text-primary group-hover:text-white" />
              <h1 className="text-xl lg:text-2xl text-black group-hover:text-white mt-2">
                SEO Services
              </h1>
              <p className="text-gray-600 text-sm group-hover:text-white text-center">
                Unlock the potential of your online presence with our expert
                SEO strategies. Drive organic traffic, boost search rankings,
                and grow your business effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSecond;
