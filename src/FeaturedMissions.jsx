import React from "react";
import "./css/AppFeatured.css";
import { ArrowUpRight } from "lucide-react";

const FeaturedMissions = () => {
  const missions = [
    {
      title: "Chandrayaan 3",
      status: "Successful",
      date: "14th July, 2023",
      note: "1st Country to reach Moon's South Pole",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
    {
      title: "Aditya L1",
      status: "Active",
      date: "2nd Sept, 2023",
      note: "Studing Sun's Corona layer",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
    {
      title: "Mangalayaan",
      status: "Successful",
      date: "August 23, 2023",
      note: "1st Country to reach Mars in 1st Attempt",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
  ];
  return (
    <section>
      <div className="section1">
        <h1>FEATURED MISSIONS</h1>
        <div className="cards">
          {missions.map((e) => (
            <div className="card">
              <span1>{e.title}</span1>
              <span2>{e.date}</span2>
              <span3>{e.info}</span3>
              <span4>{e.note}</span4>
            </div>
          ))}
          <ArrowUpRight className="arrow-icon" />
        </div>
      </div>

      <div className="section1">{/* <h1>UPCOMING LAUNCHES</h1> */}</div>

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default FeaturedMissions;
