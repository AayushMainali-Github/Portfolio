import React from "react";
import "../../Css/Projects/Projects.css";

const RandomYoutubeApi = () => {
  return (
    <div className="project">
      <div className="head">Random Youtube Api</div>
      <div className="desc">
        Its a simple api which can be used to fetch random videos from youtube. Users can send a GET request to get a random youtube video link and also can send a youtube video link
        through POST request for it to be stored in database. Its not hosted anywhere as of now as it was just a fun project I wanted to work on.
      </div>
      <div className="links">
        <a target="_" href="https://github.com/AayushMainali-Github/random-youtube-api">
          Github
        </a>
      </div>
    </div>
  );
};

export default RandomYoutubeApi;
