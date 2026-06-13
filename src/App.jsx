import React from "react";
import "./css/App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Carreer from "./pages/Carreer";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    const preventZoom = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.type === "wheel" || e.key === "+" || e.key === "-" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };
    const preventPinch = (e) => {
      if (e.touches.length > 1) e.preventDefault();
    };

    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("keydown", preventZoom);
    document.addEventListener("touchstart", preventPinch, { passive: false });

    return () => {
      document.removeEventListener("wheel", preventZoom);
      document.removeEventListener("keydown", preventZoom);
      document.removeEventListener("touchstart", preventPinch);
    };
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/carreer" element={<Carreer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
