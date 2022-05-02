import React from "react";
import "./Member.css";
import fbLogo from "../../Assets/facebook.png";
import githubLogo from "../../Assets/github.png";
const Member = (props) => {
  return (
    <div className="member">
      <a className="member__link" href={props.link}>
        <img
          src={`images/members/${props.avatar_link}`}
          className="member__avatar"
        >
        </img>
      </a>
      <div className="name">{props.name}</div>
      <div className="member__social_link">
        <a className="member__link" href={props.fb_link}>
          <img src={fbLogo} className="member__link--fb">
          </img>
        </a>
        <a className="member__link" href={props.github_link}>
          <img
            src={githubLogo}
            className="member__link--github"
          >
          </img>
        </a>
      </div>
    </div>
  );
};

export default Member;
