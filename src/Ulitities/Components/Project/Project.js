import React from "react";
import "./Project.css";
import Tag from "../../../Pages/HomePage/Components/Tag";

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-header">
        <img className="project-img" src={require(`../../Assets/${props.img_link}.png`)}></img>
        <div className="project-name">{props.name}</div>
      </div>
      <div className="project-tags">
        {props.tags.map( (tag) => {
            return <Tag color="white">{tag}</Tag>
        })}
      </div>
      <div className="project-description">
            {props.description}
      </div>
      <div className="project-redirect">More</div>
    </div>
  );
};

export default Project;
