import React from "react";
import "./css/AppFeatured.css";
import "./css/App1.css";
import { ArrowUpRight } from "lucide-react";

const UpcommingMission = () => {
  return (
    <section className="um-section">
      <h2>UPCOMING MISSION LAUNCH</h2>
      <div className="um-cards">
        <div className="um-card">
          <span1>GAGANYAAN</span1>
          <span2>LVM3 (HLVM3)</span2>
          <p>
            The Gaganyaan project is India's first human spaceflight program. It
            aims to launch a crew of three astronauts into a Low Earth Orbit of
            400 km for a mission lasting 1 to 3 days, and safely return them to
            Earth via a planned splashdown in Indian waters.
          </p>
        </div>
        <div className="um-card">
          <span2>ORBITAL TELEMENTARY</span2>
          <span3>VELOCITY</span3>
          <span3>ALTITUDE</span3>
          <span3>ANGLE</span3>
        </div>
        <div className="um-card">
          <img src="gagan.jpg" />
        </div>
        <ArrowUpRight className="arrow-icon" />
      </div>
    </section>
  );
};

export default UpcommingMission;
