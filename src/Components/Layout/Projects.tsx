import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Css/Layout/Projects.css";

const Projects = () => {
  const location = useLocation();
  const pathname: string = location.pathname;

  return (
    <div className="projects">
      <div className="head">Projects</div>
      <div className="links">
        <Link className="link" to={pathname === "/projects/lifesimulator" ? "/" : "/projects/lifesimulator"}>
          Life Simulator
        </Link>
        <Link className="link" to={pathname === "/projects/funwithaayush" ? "/" : "/projects/funwithaayush"}>
          Fun With Aayush
        </Link>
        <Link className="link" to={pathname === "/projects/vicinal" ? "/" : "/projects/vicinal"}>
          Vicinal
        </Link>
        <Link className="link" to={pathname === "/projects/shareyourstory" ? "/" : "/projects/shareyourstory"}>
          Share Your Story
        </Link>
        <Link className="link" to={pathname === "/projects/shufflecharacters" ? "/" : "/projects/shufflecharacters"}>
          Shuffle Characters
        </Link>
      </div>
    </div>
  );
};

export default Projects;
