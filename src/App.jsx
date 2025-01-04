import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services/:id" element={<Services />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
