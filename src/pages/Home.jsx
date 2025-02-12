import { Helmet } from "react-helmet-async";
import LandingOne from "../components/layouts/landingpage/LandingOne";
import LandingSecond from "../components/layouts/landingpage/LandingSecond";
import OurExpetise from "../components/layouts/landingpage/OurExpetise";
import OurServices from "../components/layouts/landingpage/OurServices";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Thynk Technologies - Innovative Web & IT Solutions</title>
        <meta
          name="description"
          content="We provide cutting-edge web development services for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="web development, eCommerce, seo, App development, software solutions"
        />
         <meta name="robots" content="index, follow" />
        <meta name="author" content="Thynk Technologies" />
        <meta property="og:title" content="Home - Thynk Technologies" />
        <meta
          property="og:description"
          content="Explore our wide range of services, including web development, mobile apps, SEO solutions, and IT consulting."
        />
        <meta
          property="og:image"
          content="https://thynktechnologies.com/images/banner.png"
        />
        <meta property="og:url" content="https://thynktechnologies.com/services" />
        <meta name="twitter:card" content="https://thynktechnologies.com/images/banner.png" />
        <meta
          name="twitter:title"
          content="Home - Thynk Technologies"
        />
        <meta
          name="twitter:description"
          content="Discover top-notch web and IT services from Thynk Technologies."
        />
        <meta
          name="twitter:image"
          content="https://thynktechnologies.com/images/banner.png"
        />
      </Helmet>
      <LandingOne />
      <LandingSecond />
      <OurExpetise />
      <OurServices />
    </>
  );
}

export default Home;
