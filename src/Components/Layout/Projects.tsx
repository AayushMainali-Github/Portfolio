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
        <Link className="link" to={pathname === "/projects/skepa" ? "/" : "/projects/skepa"}>
          Skepa
        </Link>
        <Link className="link" to={pathname === "/projects/numbertheory2" ? "/" : "/projects/numbertheory2"}>
          Number Theory 2
        </Link>
        <Link className="link" to={pathname === "/projects/programmingmastery" ? "/" : "/projects/programmingmastery"}>
          Programming Mastery
        </Link>
        <Link className="link" to={pathname === "/projects/lifesimulator" ? "/" : "/projects/lifesimulator"}>
          Life Simulator
        </Link>
        <Link className="link" to={pathname === "/projects/funwithaayush" ? "/" : "/projects/funwithaayush"}>
          Fun With Aayush
        </Link>
      </div>
    </div>
  );
};

export default Projects;
