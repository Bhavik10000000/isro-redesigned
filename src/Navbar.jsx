import React from "react";
import "./css/App.css";
import { Link } from "react-router-dom";
import { tabs } from "./data/Constant";
const Navbar = () => {
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
