import React from "react";
import "../../Css/Projects/Projects.css";

const LifeSimulator = () => {
  return (
    <div className="project">
      <div className="head">Life Simulator</div>
      <div className="desc">
        One of my first React Native Project! Life Simulator is a simple game which simulates somewhat of a life. You can do various things such as: Enroll on education courses,
        Get a job according to your education level, Invest on commodities, forex, crypto, stocks, Open Businesses in various sector. You start out with $10k and it's your goal to
        convert that $10k into billions and trillions of dollars.
      </div>
      <div className="links">
        <a target="_" href="https://github.com/AayushMainali-Github/Life-Simulator">
          Github
        </a>
        <a target="_" href="https://drive.google.com/file/d/1Idp4Vni2--6eGzzw0i0dx7z3oRsGnUeb/view?usp=drive_link">
          Download (Android)
        </a>
      </div>
    </div>
  );
};

export default LifeSimulator;
