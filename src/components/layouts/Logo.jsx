import React from "react";
import logoDark from "../../assets/images/logos/logo_dark.png";
import logoNameDark from "../../assets/images/logos/logo_name_dark.png";
import logoNameLight from "../../assets/images/logos/logo_name_white.png";
import logoLight from "../../assets/images/logos/logo_white.png";
import logoSloganLight from "../../assets/images/logos/logo_slogan_white.png";
import { Link } from "react-router-dom";

const Logo = ({ footer = false }) => {
  return (
    <Link
      to={"/"}
      onClick={() => window.scrollTo(0, 0)}
      className="flex flex-col"
    >
      <div className="flex flex-row justify-center items-center">
        <img
          src={footer ? logoLight : logoDark}
          alt="logo"
          className="w-[70px] h-[35px] lg:w-[80px] lg:h-[55px]"
        />
        <img
          src={footer ? logoNameLight : logoNameDark}
          alt="logo"
          className="w-[100px] h-[35px] lg:w-[200px] lg:h-[45px]"
        />
      </div>
      {/* {footer && (
        <img
          src={logoSloganLight}
          alt="slogan"
          className="w-[70px] h-[35px] lg:w-[300px] lg:h-[55px]"
        />

      )} */}
    </Link>
  );
};

export default Logo;
