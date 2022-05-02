import React, { useState } from "react";
import AST from "./Components/AST";
import CodeExplain from "./Components/CodeExplain";
import InterpreterApplication from "./Components/InterpreterApplication";
import Introduction from "./Components/Introduction";
import WhatYouGet from "./Components/WhatYouGet";
import InterpreterLogo from "../../../Ulitities/Assets/Interpreter.png";
import Cited from "./Components/Cited";
import Navigator from "./Components/Navigator";

import "./Interpreter.css";
const Interpreter = () => {
const [input,setInput] = useState();
  return (
      <div className="interpreter-section">
        <img className="interpreter-banner"src={InterpreterLogo}></img>
        <WhatYouGet></WhatYouGet>
        <Introduction></Introduction>
        <InterpreterApplication updateInput={setInput}></InterpreterApplication>
        <AST input={input}></AST>
        <CodeExplain></CodeExplain>
        <Cited></Cited>
        <Navigator></Navigator>
      </div>
  );
};

export default Interpreter;
