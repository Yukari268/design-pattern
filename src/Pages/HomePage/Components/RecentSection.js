import React from "react";
import "./RecentSection.css";
import Section from "../../../Ulitities/Components/Section/Section";
import Project from "../../../Ulitities/Components/Project/Project";
const RecentSection = () => {
  return (
    <div className="recent-section">
      <h2>MOST RECENTLY PROJECT</h2>
      <div className="projects_container">
        <Project
          link="interpreter"
          imgUrl="interpreter.png"
          title="Interpreter"
        ></Project>
        <Project
          link="prototype"
          imgUrl="prototype.png"
          title="Prototype"
        ></Project>
      </div>
    </div>
  );
};

export default RecentSection;
