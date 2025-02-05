import React from "react";
import logoDark from "../../assets/images/logos/logo_dark.png";
import logoDarkBkp from "../../assets/images/logos/logo_dark_bkp.png";
import logoNameDark from "../../assets/images/logos/logo_name_dark.png";
import logoNameLight from "../../assets/images/logos/logo_name_white.png";
import logoLight from "../../assets/images/logos/logo_white.png";
import logoLightBkp from "../../assets/images/logos/logo_white_bkp.png";
import logoSloganLight from "../../assets/images/logos/logo_slogan_white.png";
import { Link } from "react-router-dom";

const Logo = ({ footer = false }) => {
  return (
    <Link
      to={"/"}
      onClick={() => window.scrollTo(0, 0)}
    >
        <img
          src={footer ? logoLightBkp :  logoLightBkp}
          alt="logo"
          className={`h-[25px] lg:h-[30px] object-fit ${footer && "invert"}`}
        />
       
     </Link>
  );
};

export default Logo;
