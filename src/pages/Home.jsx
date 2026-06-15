import React from "react";
import "../css/App.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { keyPoints } from "../data/Constant";
import { missions } from "../data/Constant";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { vehicles } from "../data/Constant";
import { contributes } from "../data/Constant";
import { motion } from "motion/react";

const Home = () => {
  const shortMissions = missions.slice(0, 3);
  return (
    <>
      <section>
        <div className="image">
          <div className="hero-section">
            <div className="left-div">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span>
                  <b>Welcome to the</b>
                </span>
                <h1>
                  INDIAN SPACE <br />
                  RESEARCH ORGANIZATION
                </h1>
                <p>
                  Discover India's missions, satellites, rockets and future in
                  space.
                </p>
                <div className="cta-button">
                  <Link to="/mission" element={"Mission"}>
                    <button className="one">Explore Missions</button>
                  </Link>
                  <button className="two">Watch Launches</button>
                </div>
              </motion.div>
            </div>
            <div className="mid-home">
              <img src="satellite.png" />
            </div>
            <div className="right-div">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <a
                  href="https://share.google/JuzM54MLKeRhMPEkj"
                  target="_blank"
                >
                  <FaFacebook className="icons face" />
                </a>
                <br />
                <a
                  href="https://share.google/BeXsLKiDWssaHdh6l"
                  target="_blank"
                >
                  <FaInstagram className="icons insta" />
                </a>
                <br />
                <a
                  href="https://share.google/EoVTAirJize8aVT4l"
                  target="_blank"
                >
                  <FaYoutube className="icons yt" />
                </a>
                <br />
                <a
                  href="https://share.google/v6HRknVUcEml2S6oe"
                  target="_blank"
                >
                  <FaXTwitter className="icons twit" />
                </a>
                <br />
              </motion.div>
            </div>
          </div>
          <section>
            <div className="section1-div">
              {keyPoints.map((e) => (
                <div className="section1-div-div">
                  <span className="span1">
                    {/* <CountUp start={0} end={e.para} duration={5} /> */}
                    {e.title}
                  </span>
                  <span className="span2">{e.para}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section2">
        <div className="section-heads">
          <hr />
          <span-title>Launch vehicles</span-title>
          <hr />
        </div>

        <div className="vehicles-container">
          <div className="vehicles-left">
            <span-lv>
              ISRO's
              <br /> Powerhouses <br /> in Space
            </span-lv>
            <p>
              ISRO utilizes a versatile fleet of launch vehicles to reach space,
              ranging from the reliable PSLV, known as the "workhorse" for polar
              orbits, to the heavy-lift LVM3, which carries massive
              communication satellites and human-rated missions.
            </p>

            <Link to="/mission" className="view-all-link">
              <button> View All Launch Vehicles</button>
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="arrow-icon-vehi"
              />
            </Link>
          </div>

          <div className="vehicles-right">
            {vehicles.map((e, index) => (
              <div className="v-individual" key={index}>
                <img src={e.img} className="v-name-img" />
                <span className="span-vff">{e.full}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contribution-section">
        <div className="section-heads">
          <hr />
          <span-title>where isro contributes</span-title>
          <hr />
        </div>

        <div className="contribution-grid">
          {contributes.map((item) => (
            <a href={item.link} target="_blank">
              <div
                className={`contribution-card card-${item.id}`}
                key={item.id}
              >
                <div className="c-icon-box">{item.icon}</div>
                <span className="c-title">{item.title}</span>
                <p className="c-para">{item.para}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <div className="div-circle">
        <div className="circle">Hello</div>
      </div>

      <section className="section2-bg">
        <div className="section-heads">
          <hr />
          <span-title>FEATURED MISSIONS</span-title>
          <hr />
        </div>
        <div className="missions">
          {shortMissions.map((e) => (
            <div className="missions-card">
              <img src={e.img} />
              <span-name>{e.name}</span-name>
              <span-mc-type>{e.type}</span-mc-type>
              <span-date>{e.date}</span-date>
              <span-info>{e.info}</span-info>
            </div>
          ))}
        </div>
        <Link to="/mission" element={"Mission"}>
          <button>View All</button>
        </Link>
      </section>

      {/* <section className="section2-bg">
        <div className="section-heads">
          <hr />
          <span-title>Launch vehicles</span-title>
          <hr />
        </div>
      </section> */}
    </>
  );
};

export default Home;
