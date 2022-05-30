import React, { useState } from "react";
import "./PrototypeApplication.css"
import { predefinedAvatar } from "../PrototypeObject/PredefinedAvatar";
import Avatar from "./Avatar";
import FinalAvatar from "./FinalAvatar"

export const PrototypeApplication = () => {

  const [currentAvatar, setCurrentAvatar] = useState(predefinedAvatar[0]);

  return (
    <div className="prototype-application">
      <h2>Simple Avatar Creator</h2>
      <FinalAvatar avatar = {currentAvatar}></FinalAvatar>
      <div className="predefined-avatar">
        <h3> Hay chon nhung mau co san o duoi day </h3>
      <div className="predefined-avatar-container">
      {predefinedAvatar.map( (avatar) => {
        return <Avatar avatar ={avatar} setSource={setCurrentAvatar}></Avatar>
      })}
      </div>
    </div>
    </div>
  );
};
