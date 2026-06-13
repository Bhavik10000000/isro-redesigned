import React from "react";
import "./css/App.css";
const Footer = () => {
  return (
    <section>
      {" "}
      <div className="section-heads">
        <hr />
        <span-title>
          <div className="footer-main">
            <img src="logo.png" className="footer-logo" />
          </div>
        </span-title>
        <hr />
      </div>
      <div className="copyright">{`Copyright ©${new Date().getFullYear()} ISRO INDIA`}</div>
    </section>
  );
};

export default Footer;
