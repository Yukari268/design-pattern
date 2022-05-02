import React from "react";
import "./RecentSection.css";
import Section from "../../../Ulitities/Components/Section/Section";
import Project from "../../../Ulitities/Components/Project/Project";
const RecentSection = () => {
  return (
    <Section>
      <h2>NHỮNG DỰ ÁN GẦN ĐÂY</h2>
      <div className="projects_container">
        <Project
          link="interpreter"
          imgUrl="interpreter.png"
          title="Interpreter"
        ></Project>
        <Project
          link="iterator"
          imgUrl="iterator.png"
          title="Iterator"
        ></Project>
      </div>
    </Section>
  );
};

export default RecentSection;
