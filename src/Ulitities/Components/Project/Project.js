import React from "react";
import "./Project.css"

const Project = (props) => {
    return (
        <div className="project">
            <a className="project__link" href={props.link}>
                <img className="project__img" src={`images/${props.imgUrl}`}></img>
            </a>
            <div className="project__name">{props.title}</div>
        </div>
    )
}

export default Project;