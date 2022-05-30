import React from "react";
import "./AllProjectSection.css";
import Project from "../../../Ulitities/Components/Project/Project";
import ScrollContainer from 'react-indiana-drag-scroll'

const AllProjectSection = () => {
  return (
    <div className="all-project-section">
      <div className="all-project-section-bg"></div>
      <div className="all-project-section-content">
        <div className="title">
          <p className="no-fill">ALL </p> PROJECT
        </div>
        <div className="practical-section">
          <div className="practical-section-title">Practical</div>
          <ScrollContainer className="project-list" vertical={false}>
            <Project
              img_link="simple_clock"
              name="Simple Alarm Clocks"
              tags={["Singleton", "Observer", "Mediator", "Template Method"]}
              description="A demo for Observer, Singleton, Mediator, Template Method using Javascript"
              path="/simple-clock"
            ></Project>
            <Project
              img_link="markdown"
              name="Markdown Converter"
              tags={["Interpreter"]}
              description="A demo for Interpreter using Javascript and Open Source Library"
              path="/markdown-converter"
            ></Project>
            <Project
              img_link="avatar_creator"
              name="Simple Avatar Creator"
              tags={["Prototype","Iterator","Flyweight"]}
              description="A demo for Prototype, Iterator, Flyweight using Javascript and Open Source Library"
              path="/avatar-creator"
            ></Project>
          </ScrollContainer>
        </div>
        <div className="theory-section">
          <div className="theory-section-title">Theory</div>
          <div className="project-list">
          <Project
              img_link="word"
              name="Design Pattern Report Word"
              tags={["Prototype","Iterator","Flyweight","Interpreter","Singleton", "Observer", "Mediator", "Template Method"]}
              description="A report about 8 design patterns in NodeJS wrote by us"
            ></Project>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectSection;
