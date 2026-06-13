import React from "react";
import "./css/FooterApp.css";
const Footer = () => {
  return (
    <section>
      <div className="footer-main">
        <img src="logo.png" className="footer-logo" />
      </div>
      <div className="copyright">{`Copyright ©${new Date().getFullYear()} ISRO INDIA`}</div>
    </section>
  );
};

export default Footer;
