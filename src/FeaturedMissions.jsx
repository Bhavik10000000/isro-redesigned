import React from "react";
import "./AppFeatured.css";

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
      title: "Mangalayaan MOM",
      status: "Successful",
      date: "August 23, 2023",
      info: " This is arguably ISRO's greatest achievement to date. On August 23, 2023, India became the first country to soft-land near the lunar South Pole.",
    },
  ];
  return (
    <section>
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
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default FeaturedMissions;
