import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const tabs = [
    { id: 1, tab: "Home", to: "/home" },
    { id: 2, tab: "About", to: "/about" },
    { id: 3, tab: "Missions", to: "/missions" },
    { id: 4, tab: "Careers", to: "/carreer" },
    { id: 5, tab: "Contact", to: "/contact" },
  ];
  return (
    <div className="div-main-nav">
      <img src="logo.png" className="logo" />
      <div className="div-center">
        <nav className="div-nav">
          <ul>
            {tabs.map((e) => (
              <Link to={e.to}>
                <li key={e.id}>{e.tab}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <img src="emblem.png" className="emblen" />
    </div>
  );
};

export default Navbar;
