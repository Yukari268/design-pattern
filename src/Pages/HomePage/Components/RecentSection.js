import React from "react";
import "./RecentSection.css";
import Section from "../../../Ulitities/Components/Section/Section";
import Project from "../../../Ulitities/Components/Project/Project";
import Tag from "./Tag";
const RecentSection = () => {
  return (
    <div className="recent-section">
      <div className="recent-section-bg"></div>
      <div className="recent-section-content">
        <div className="typo">
          MOST <p className="no-fill">RECENT</p> PROJECT
        </div>
        <img className="project-img-recent" src={require("../../../Ulitities/Assets/simple_clock.png")}/>
        <div className="introduction">
          <div className="title-recent">Simple Alarm Clocks</div>
          <div className="type"></div>
          <div className="tags">
          <Tag color="red">Practical</Tag>
          <Tag color="white">Observer</Tag>
          <Tag color="white">Mediator</Tag>
          <Tag color="white">Singleton</Tag>
          <Tag color="white">Template Method</Tag>
          </div>
          <div className="description">A demo for Observer, Singleton, Mediator, Template Method using Javascript</div>
        </div>
      </div>
    </div>
  );
};

export default RecentSection;
