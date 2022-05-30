import React, { useContext } from "react";
import "./AST.css"
const Node = ({ node }) => (
  <div className="node-type">
    <strong>
      {node.type}
      {node.depth && <span> (d{node.depth})</span>}
    </strong>

    {node.value && <div className="node-value"><p>{node.value}</p></div>}

    {/* Render additional Nodes for each child */}
    {node.children &&
      node.children.map(child => {
        const { line, column, offset } = child.position.start;
        return <Node key={`${line}-${column}-${offset}`} node={child} />;
      })}
  </div>
);


const AST = (props) => {
  return (
    <div id="ast">
      <h1 className="ast-title">AST</h1>
     {props.input && <Node node={props.input}></Node>}
    </div>
  );
};

export default AST;
