import React from "react";
import "./App.css";

const Navbar = () => {
  const tabs = [
    { id: 1, tab: "Home" },
    { id: 2, tab: "Missions" },
    { id: 3, tab: "Launches" },
    { id: 4, tab: "Careers" },
    { id: 5, tab: "Contact" },
  ];
  return (
    <div className="div-main-nav">
      <img src="logo.png" className="logo" />
      <div className="div-center">
        <nav className="div-nav">
          <ul>
            {tabs.map((e) => (
              //   <Link to={e.tab}>
              <li key={e.id}>{e.tab}</li>
              //   </Link>
            ))}
          </ul>
        </nav>
      </div>
      <img src="emblem.png" className="emblen" />
    </div>
  );
};

export default Navbar;
