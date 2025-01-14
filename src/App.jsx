import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
// import PrivacyPolicy from "./pages/PrivacyPolicy";


const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ContactUs = lazy(() => import( "./pages/ContactUs"));
const About = lazy(() => import( "./pages/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services/:id?" element={<Services />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/terms-of-use" element={<TermsOfUse/>}></Route>
          <Route path="/privacy-policy" element={<Privacy/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
