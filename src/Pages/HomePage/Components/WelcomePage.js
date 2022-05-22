import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-bg"></div>
      <div className="project-nav">
        <img src={require("../../../Ulitities/Assets/project_name.png")}></img>
        <ul className="project-nav-list">
            <li>
              <a className="active"><sup>1</sup> WELCOME</a>
            </li>
            <li>
              <a><sup>2</sup> MOST RECENT PROJECT</a>
            </li>
            <li>
              <a><sup>3</sup> ALL PROJECTS</a>
            </li>
            <li>
              <a><sup>4</sup> ABOUT</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
