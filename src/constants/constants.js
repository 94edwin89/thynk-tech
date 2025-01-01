import { MdAppShortcut } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { TbSeo } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
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
        url: "/web-dev",
        icon: GoBrowser,
        description: "Building modern and responsive web applications.",
      },
      {
        title: "App Development",
        url: "/app-dev",
        icon: MdAppShortcut,
        description: "Creating native and cross-platform mobile apps.",
      },
      {
        title: "Search Engine Optimization",
        url: "/seo",
        icon: TbSeo,
        description: "Improving visibility and search rankings.",
      },
    ],
  },
  {
    title: "Industries",
    subMenu: [
      {
        title: "Technology & Software Development",
        url: "/technology",
        description:
          "Software Solutions: Custom software, SaaS products, and cloud-based platforms.",
        icon: HiMiniComputerDesktop,
      },
      {
        title: "E-Commerce",
        url: "/ecommerce",
        description:
          "Online Retail: E-commerce platform development, order management systems, and customer experience solutions.",
        icon: FaCartShopping,
      },
    ],
  },
  {
    title: "About Us",
    url: "/about-us",
  },
];
