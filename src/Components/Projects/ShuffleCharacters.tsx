import React from "react";
import "../../Css/Projects/Projects.css";

const ShuffleCharacters = () => {
  return (
    <div className="project">
      <div className="head">Shuffle Characters</div>
      <div className="desc">
        Its a npm package that can be used to shuffle characters inside a string or shuffle digits of a number. I always wanted to have my own npm package and went on building one.
        Some usecases for this might be in casinos or some kind of lottery. The source code is not that huge, Its only about 30-40 lines of code.
      </div>
      <div className="links">
        <a target="_" href="https://www.npmjs.com/package/shuffle-characters">
          NPM
        </a>
        <a target="_" href="https://github.com/AayushMainali-Github/shuffle-characters">
          Github
        </a>
      </div>
    </div>
  );
};

export default ShuffleCharacters;
