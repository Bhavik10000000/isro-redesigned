import React from "react";
import "../css/App.css";

import { pioneers } from "../data/Constant";
import { timeline } from "../data/Constant";
import Developing from "../Developing";
const About = () => {
  return (
    <>
      <Developing />
      {/* <section className="about-section">
        <h2>Journey Through Time</h2>

        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Great Pioneers</h2>

        <div className="pioneers-container">
          {pioneers.map((person, index) => (
            <div key={index} className="pioneer-card">
              <img src={person.img} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Major Achievements</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <h3>Chandrayaan Program</h3>
            <p>India's successful lunar exploration missions.</p>
          </div>

          <div className="achievement-card">
            <h3>Mars Orbiter Mission</h3>
            <p>First nation to reach Mars orbit on its first attempt.</p>
          </div>

          <div className="achievement-card">
            <h3>Aditya-L1</h3>
            <p>India's first dedicated solar observation mission.</p>
          </div>

          <div className="achievement-card">
            <h3>PSLV</h3>
            <p>One of the world's most reliable launch vehicles.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Future Vision</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <h3>Gaganyaan</h3>
            <p>India's first human spaceflight mission.</p>
          </div>

          <div className="achievement-card">
            <h3>Indian Space Station</h3>
            <p>Long-term human presence in low Earth orbit.</p>
          </div>

          <div className="achievement-card">
            <h3>Moon Exploration</h3>
            <p>Advanced lunar science and exploration missions.</p>
          </div>

          <div className="achievement-card">
            <h3>Deep Space Missions</h3>
            <p>Expanding India's presence beyond Earth orbit.</p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
