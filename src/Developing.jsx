import React from "react";
import "./css/Developing.css";
import "./css/App.css";
const Developing = () => {
  return (
    <section className="dev-section">
      <div className="section-heads">
        <hr />
        <span-title>IN DEVELOPMENT</span-title>
        <hr />
      </div>
      <div className="main-dev">
        <div className="top">
          <img src="top.png" className="topImg" />
        </div>
        <div className="bottom">
          <img src="left.png" className="leftImg" />
          <img src="bottom.png" className="bottomImg" />
          <img src="right.png" className="rightImg" />
        </div>
        <div className="smoke">..</div>
      </div>
    </section>
  );
};

export default Developing;
