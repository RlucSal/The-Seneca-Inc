import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"; // Renamed from WhatWeDo
import SupportUs from "./Pages/SupportUs";
import FAQ from "./Pages/FAQ";
import WomenHarvard from "./Pages/WomenHarvard";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUS";
import Password from "./Pages/Password";
import Footer from "./Components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SupportUs" element={<SupportUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/WomenHarvard" element={<WomenHarvard />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Password" element={<Password />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
