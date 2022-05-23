import React from "react";
import "./Tag.css";

const Tag = (props) => {
  return (
    <div
      className="tag"
      style={{ border: `1px solid ${props.color}`, color: `${props.color}` }}
    >
      {props.children}
    </div>
  );
};

export default Tag;
