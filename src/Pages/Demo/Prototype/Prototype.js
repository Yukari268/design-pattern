import React from "react";
import { PrototypeApplication } from "./Components/PrototypeApplication";
import "./Prototype.css"

export const Prototype = () => {
  return (
    <div className="prototype-section">
      <h2>Những gì bạn sẽ đạt được</h2>
      <h2>Giới thiệu tổng quan</h2>
      <PrototypeApplication></PrototypeApplication>
      <h2>Trích dẫn</h2>
    </div>
  );
};
