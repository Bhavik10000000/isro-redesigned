import React from "react";
import "./App.css";
// import image from "../public/image.png";
const Home = () => {
  const section1 = [
    { title: "54+", para: "YEARS OF SPACE EXPLORATION" },
    { title: "90%", para: "SUCCESSFUL RATE" },
    { title: "100+", para: "SUCCESSFUL MISSIONS" },
    // { title: "1st", para: "TO REACH MARS IN 1ST ATTEMPT" },
  ];

  const missions = [
    {
      title: "Chandrayaan 3",
      status: "Successful",
      date: "August 23, 2023",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
    {
      title: "Chandrayaan 3",
      status: "Successful",
      date: "August 23, 2023",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
    {
      title: "Chandrayaan 3",
      status: "Successful",
      date: "August 23, 2023",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
  ];
  return (
    <>
      <section>
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
        </div>
      </section>
      <section>
        <div className="section1-div">
          {section1.map((e) => (
            <div className="section1-div-div">
              <span className="span1">{e.title}</span>
              <spanc className="span2">{e.para}</spanc>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h1>FEATURED MISSIONS</h1>
          <div className="mission-card-main">
            {missions.map((e) => (
              <div className="mission-card">
                <h2>{e.title}</h2>
                <span>{e.status}</span>
                <span>{e.date}</span>
                <p>{e.info}</p>
              </div>
            ))}
          </div>
        </div>

        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Home;
