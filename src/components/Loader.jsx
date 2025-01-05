import React from "react";
import { TbLoader2 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <TbLoader2 size={36} className="text-primary animate-spin" />
    </div>
  );
};

export default Loader;
