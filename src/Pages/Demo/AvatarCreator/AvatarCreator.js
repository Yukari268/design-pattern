import React from "react";
import { PrototypeApplication } from "./Components/PrototypeApplication";
import "./AvatarCreator.css"
import AvatarCodeExplain from "./Components/AvatarCodeExplain"

const AvatarCreator = () => {
  return (
    <div className="prototype-section">
      <PrototypeApplication></PrototypeApplication>
      <AvatarCodeExplain></AvatarCodeExplain>
    </div>
  );
};

export default AvatarCreator