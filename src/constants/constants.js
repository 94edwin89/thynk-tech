import { MdAppShortcut } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { TbSeo } from "react-icons/tb";

import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import webDev1 from "../assets/images/web_dev_1.jpg"
import webDev2 from "../assets/images/web_dev_2.jpg"
import webDev3 from "../assets/images/web_dev_3.jpg"
import webDev4 from "../assets/images/web_dev_4.jpg"

export const headerLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    subMenu: [
      {
        title: "Web Development",
        url: "/services/web-dev",
        icon: GoBrowser,
        description: "Building modern and responsive web applications.",
      },
      {
        title: "App Development",
        url: "/services/app-dev",
        icon: MdAppShortcut,
        description: "Creating native and cross-platform mobile apps.",
      },
      {
        title: "Search Engine Optimization",
        url: "/services/seo",
        icon: TbSeo,
        description: "Improving visibility and search rankings.",
      },
    ],
  },
  // {
  //   title: "Industries",
  //   subMenu: [
  //     {
  //       title: "Technology & Software Development",
  //       url: "/technology",
  //       description:
  //         "Software Solutions: Custom software, SaaS products, and cloud-based platforms.",
  //       icon: HiMiniComputerDesktop,
  //     },
  //     {
  //       title: "E-Commerce",
  //       url: "/ecommerce",
  //       description:
  //         "Online Retail: E-commerce platform development, order management systems, and customer experience solutions.",
  //       icon: FaCartShopping,
  //     },
  //   ],
  // },
  {
    title: "About Us",
    url: "/about-us",
  },
];

export const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    url: "https://x.com/?mx=2",
    icon: BsTwitterX,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
];

export const quickLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

export const serviceLinks = [
  {
    title : "App Development",
    url : "/services/app-dev"
  },
  {
    title : "Web Developemnt",
    url : "/services/web-dev",
  },
  {
    title : "Search Engine Optimization",
    url : "/services/seo"
  },
  {
    title : "Other Services",
    url : "/services/web-dev"
  }
];

export const webDevServices = [
  {
    id:0,
    title : "Poppie Hair & Makeup",
    img: webDev1,
    url : "https://www.poppiehairandmakeup.in/"
  },
  {
    id:1,
    title : "Quality Fishnets",
    img: webDev2,
    url : "https://www.qualityfishnets.com/"
  },
  {
    id:2,
    title : "E-Commerce Property Pulse",
    img: webDev4,
    url : "https://propertypulse.onrender.com/"
  },
  {
    id:3,
    title : "Hostel Management",
    img: webDev3,
    url : "https://hostelmanagement1245.netlify.app/"
  },
]
