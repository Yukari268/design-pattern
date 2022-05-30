import React, { createContext, useRef, useState } from "react";
import "./InterpreterApplication.css";
import { unified } from "../Library/unified";
import markdown from "../Library/remark-parse";
import remarkRehype from "../Library/remark-rehype";
import rehypeStringify from "../Library/rehype-stringify";

const InterpreterApplication = (props) => {
  const [outPutValue, setOutPutValue] = useState("");
  const inputRef = useRef();
  const ConvertToHTML = (e) => {
    const converter = unified()
    .use(markdown)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(e.target.value)
      .then((output) => {
        setOutPutValue(String(output));
      })
      .catch((error) => console.error(error));
    const tree = unified().use(markdown).parse(e.target.value);
    props.updateInput(tree);
    };

    
    return (
      <div className="interpreter-app">
      <h2 className="interpreter-title" id="interpreter-app">MarkDown-Language Converter</h2>
      <div className="interpreter-body">
        <div className="markdown-input">
          <textarea onChange={(e) => ConvertToHTML(e)} ref={inputRef}></textarea>
          <div>MarkDown</div>
        </div>
        <div className="normal-output">
          <div
            className="normal-output-div"
            dangerouslySetInnerHTML={{ __html: outPutValue }}
            onChange={(e) => {}}
            ></div>
          <div>OutPut</div>
        </div>
      </div>
    </div>
  );
};

export default InterpreterApplication;