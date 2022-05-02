import React from "react";
import "./AllProjectSection.css";
import Section from "../../../Ulitities/Components/Section/Section";
import Project from "../../../Ulitities/Components/Project/Project";

const AllProjectSection = () => {
  return (
    <Section>
      <h2>TOÀN BỘ DỰ ÁN</h2>
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
        <Project
          link="prototype"
          imgUrl="placeholder-image.png"
          title="Prototype"
        ></Project>
        <Project
          link="singleton"
          imgUrl="placeholder-image.png"
          title="Singleton"
        ></Project>
        <Project
          link="flyweight"
          imgUrl="placeholder-image.png"
          title="Flyweight"
        ></Project>
        <Project
          link="mediator"
          imgUrl="placeholder-image.png"
          title="Mediator"
        ></Project>
        <Project
          link="observer"
          imgUrl="placeholder-image.png"
          title="Observer"
        ></Project>
        <Project
          link="template_method"
          imgUrl="placeholder-image.png"
          title="Template Method"
        ></Project>
      </div>
    </Section>
  );
};

export default AllProjectSection;
