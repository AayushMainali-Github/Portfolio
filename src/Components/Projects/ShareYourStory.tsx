import React from "react";
import "../../Css/Projects/Projects.css";

const ShareYourStory = () => {
  return (
    <div className="project">
      <div className="head">Share Your Story</div>
      <div className="desc">
        A simple website that allows users to share their life events or stories. Its very minimal so don't expect much. There's basic functionality of creating an account, posting
        your stories, viewing whats trending and a few more things. The design is not that great but gets the job done!
      </div>
      <div className="links">
        <a target="_" href="https://share-your-story.pages.dev/">
          Website
        </a>
        <a target="_" href="https://github.com/orgs/Share-Your-Story/repositories">
          Github
        </a>
      </div>
    </div>
  );
};

export default ShareYourStory;
