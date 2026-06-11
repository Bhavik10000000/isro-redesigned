import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
