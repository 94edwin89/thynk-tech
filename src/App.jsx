import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense } from "react";
import Header from "./components/layouts/Header";
import Loader from "./components/Loader";
import Footer from "./components/layouts/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
