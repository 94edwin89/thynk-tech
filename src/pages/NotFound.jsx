import React from "react";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col gap-6 justify-center items-center">
      <div className="rounded-full bg-red-100 p-5">
        <TbFaceIdError size={48} className="text-red-600" />
      </div>
      <p className="dark-text text-xl font-semibold">
        Sorry, the requested page is not Found.
      </p>
      <Button>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
