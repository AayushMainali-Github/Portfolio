/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, MouseEventHandler, MouseEvent } from "react";
import "../../Css/Layout/Header.css";
import Logo from "../../Assets/logo.png";
import githubDark from "../../Assets/githubDark.png";
import githubLight from "../../Assets/githubLight.png";

const Header = () => {
  const [icon, setIcon] = useState<string>(githubDark);
  const [iconClass, setIconClass] = useState<string>("");
  const onEnter: MouseEventHandler = (e: MouseEvent) => {
    e.preventDefault();
    setIcon(githubLight);
    setIconClass("hovered");
  };
  const onLeave: MouseEventHandler = (e: MouseEvent) => {
    e.preventDefault();
    setIcon(githubDark);
    setIconClass("");
  };
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <a target="_" onMouseEnter={onEnter} onMouseLeave={onLeave} className="link" href="https://github.com/AayushMainali-Github">
        <img className={iconClass} src={icon} alt="Github" />
      </a>
    </div>
  );
};

export default Header;
