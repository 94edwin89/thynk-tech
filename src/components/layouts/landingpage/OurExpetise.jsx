import { useInView } from "react-intersection-observer";
import "./Expertise.css";
import Logo from './Logo';
import String from './String'

function OurExpertise() {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger every time the section comes into view
    threshold: 0.2,      // Trigger when 20% of the element is visible
  });

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={ref}
      style={{ backgroundColor: "white" }}
    >
      {/* Heading Section */}
      <div className="grid grid-flow-row gap-2">
        <h1 className="p-8 font-thin text-center text-4xl lg:text-6xl text-gray-600">
          Our Expertise
        </h1>
        <p className="sm:text-md text-center pb-8">
          Rely on our extensive technical expertise in web development,
          E-commerce, mobile application, SEO, and cloud computing to deliver
          tailored solutions for your business needs and
          <br /> drive your success forward.
        </p>
      </div>

      {/* Logo Section */}
      <div className="mt-10 mb-5">
        <Logo />
        
      </div>
      <div>
        <String/>
      </div>
    </div>
  );
}

export default OurExpertise;
