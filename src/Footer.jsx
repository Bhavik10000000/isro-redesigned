import React from "react";
import "./css/App.css";
import { tabs } from "./data/Constant";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="footer-section">
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
      <div className="footer">
        <div className="footer-left">
          <span className="footer-title">
            INDIAN SPACE RESEARCH ORGANIZATION
          </span>
          <span className="footer-info">
            ISRO harnesses space technology for national development, pursues
            space science research and planetary exploration for the benefit of
            mankind, and inspires the nation through its commitment to
            self-reliance and innovation.
          </span>
          <button className="join-button">Join Us</button>
        </div>
        <div className="footer-mid">
          <ul>
            {tabs.map((e) => (
              <Link to={e.to} onClick={window.scrollTo(0, 0)}>
                <li key={e.id}>{e.tab}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="footer-right">
          <a href="https://share.google/JuzM54MLKeRhMPEkj" target="_blank">
            <FaFacebook className="footer-icons face" fontSize={20} />
          </a>
          <br />
          <a href="https://share.google/BeXsLKiDWssaHdh6l" target="_blank">
            <FaInstagram className="footer-icons insta" fontSize={20} />
          </a>
          <br />
          <a href="https://share.google/EoVTAirJize8aVT4l" target="_blank">
            <FaYoutube className="footer-icons yt" fontSize={20} />
          </a>
          <br />
          <a href="https://share.google/v6HRknVUcEml2S6oe" target="_blank">
            <FaXTwitter className="footer-icons twit" fontSize={20} />
          </a>
        </div>
      </div>
      <div className="copyright">
        {`Copyright © ${new Date().getFullYear()} ISRO INDIA`}
        <br />- Bhavik Sapat -
      </div>
    </section>
  );
};

export default Footer;
