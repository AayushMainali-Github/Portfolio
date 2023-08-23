import React from "react";
import { Outlet } from "react-router-dom";
import "../../Css/Layout/Layout.css";
import Header from "./Header";
import Projects from "./Projects";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Outlet />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
