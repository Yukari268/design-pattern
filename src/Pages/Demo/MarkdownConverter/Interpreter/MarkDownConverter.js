import React, { useState } from "react";
import AST from "./Components/AST";
import CodeExplain from "./Components/CodeExplain";
import InterpreterApplication from "./Components/InterpreterApplication";
import Cited from "./Components/Cited";
import "./MarkDownConverter.css";


const MarkDownConverter = () => {
const [input,setInput] = useState();
  return (
      <div className="interpreter-section">
        <InterpreterApplication updateInput={setInput}></InterpreterApplication>
        <AST input={input}></AST>
        <CodeExplain></CodeExplain>
        <Cited></Cited>
      </div>
  );
};

export default MarkDownConverter;
