import React from "react";

const ServiceCard = ({ service }) => {
  const handleClick = () => {
    if (service?.url) {
      window.open(service.url, "_blank");
    }
  };

  return (
    <div
      className="relative cursor-pointer w-full max-w-xs my-10"
      onClick={handleClick}
    >
      <div className="relative group">
        <img
          src={service?.img}
          className={`w-full md:w-[450px] object-cover h-[200px] md:h-[220px] rounded-md transition-opacity duration-300 group-hover:opacity-80`}
          alt={service?.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">{service?.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
