import React from "react";
import "../css/App.css";
// import image from "../public/image.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FeaturedMission from "../FeaturedMissions";
import UpcommingMission from "../UpcommingMission";
import { keyPoints } from "../data/Constant";

const Home = () => {
  return (
    <>
      <section>
        <div className="image">
          <div className="hero-section">
            <div className="left-div">
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
                <button className="one">Explore Missions</button>
                <button className="two">Watch Launches</button>
              </div>{" "}
            </div>
            <div className="right-div">
              <div>
                <FaFacebook className="icons face" />
                <br />
                <FaInstagram className="icons insta" />
                <br />
                <FaYoutube className="icons yt" />
                <br />
                <FaXTwitter className="icons twit" />
                <br />
              </div>
            </div>
          </div>
          <section>
            <div className="section1-div">
              {keyPoints.map((e) => (
                <div className="section1-div-div">
                  <span className="span1">{e.title}</span>
                  <spanc className="span2">{e.para}</spanc>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section2-bg">
        <UpcommingMission />
      </section>
      <section className="section2-bg">
        <FeaturedMission />
      </section>
    </>
  );
};

export default Home;
