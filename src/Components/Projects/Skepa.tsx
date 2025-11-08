import React from "react";
import "../../Css/Projects/Projects.css";

const Skepa = () => {
  return (
    <div className="project">
      <div className="head">Skepa</div>
      <div className="desc">
        Skepa is a small, readable programming language implemented end-to-end: lexer, parser (Pratt), AST, and interpreter with a working runtime environment and built‑ins. The
        project is mostly complete and includes comprehensive tests across all stages. The language is designed to be easy to learn and use, with a focus on readability and
        maintainability.
      </div>
      <div className="links">
        <a target="_" href="https://github.com/AayushMainali-Github/Skepa">
          Github
        </a>
      </div>
    </div>
  );
};

export default Skepa;
