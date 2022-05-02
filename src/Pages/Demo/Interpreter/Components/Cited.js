import React from "react";
import "./Cited.css";

const Cited = () => {
  return (
    <div className="cited-section">
      <h2 className="cited-section-title" id="cited">Tham khảo</h2>
      <ol>
        <li>
          <a href="https://braincoke.fr/blog/2020/03/an-introduction-to-unified-and-remark/?fbclid=IwAR1Z6C_2iTci3Xj4lBRSAILmdUjyhqeF2odl_plNban6Qx8JwxpytSjWKEE#the-unified-collective">
            An Introduction to Unified and Remark
          </a>
        </li>
        <li>
          <a href="http://blogs.perl.org/users/jeffrey_kegler/2013/03/the-interpreter-design-pattern.html">
            Why they called Interpreter a joke and how to solve it
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">
            What is a AST (Abstract Syntax Tree)
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Cited;
