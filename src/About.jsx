import React from "react";
import "./AboutApp.css";

const About = () => {
  const timeline = [
    {
      year: "1969",
      title: "ISRO Founded",
      description:
        "The Indian Space Research Organisation was established under the leadership of Dr. Vikram Sarabhai.",
    },
    {
      year: "1975",
      title: "Aryabhata",
      description:
        "India's first satellite, Aryabhata, was launched into space.",
    },
    {
      year: "2008",
      title: "Chandrayaan-1",
      description:
        "India's first lunar mission confirmed the presence of water molecules on the Moon.",
    },
    {
      year: "2014",
      title: "Mars Orbiter Mission",
      description:
        "India became the first nation to reach Mars orbit in its maiden attempt.",
    },
    {
      year: "2023",
      title: "Chandrayaan-3",
      description:
        "India became the first country to successfully land near the Moon's south pole.",
    },
  ];

  const pioneers = [
    {
      name: "Dr. Vikram Sarabhai",
      role: "Father of the Indian Space Program",
      img: "sarabhai.webp",
    },
    {
      name: "Prof. Satish Dhawan",
      role: "Former Chairman, ISRO",
      img: "dhawan.jpg",
    },
    {
      name: "Dr. A. P. J. Abdul Kalam",
      role: "Missile Scientist & Former President",
      img: "kalam.jpg",
    },
    {
      name: "Dr. U. R. Rao",
      role: "Satellite Program Pioneer",
      img: "rao.jpg",
    },
    {
      name: "Dr. Nambi Narayana",
      role: "Aerospace Pioneer",
      img: "narayana.jpeg",
    },
  ];

  return (
    <>
      <section className="about-section">
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

      {/* PIONEERS */}
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

      {/* ACHIEVEMENTS */}
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

      {/* FUTURE */}
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
      </section>
    </>
  );
};

export default About;
