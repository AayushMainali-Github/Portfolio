import React, { useEffect } from "react";
import "../Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import mouseMove from "../Utilities/mouseMove";
import ProgrammingMastery from "./Projects/ProgrammingMastery";
import ShareYourStory from "./Projects/ShareYourStory";
import FunWithAayush from "./Projects/FunWithAayush";
import Vicinal from "./Projects/Vicinal";
import LifeSimulator from "./Projects/LifeSimulator";
import ShuffleCharacters from "./Projects/ShuffleCharacters";

const App = () => {
  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects/programmingmastery" element={<ProgrammingMastery />} />
          <Route path="/projects/shareyourstory" element={<ShareYourStory />} />
          <Route path="/projects/funwithaayush" element={<FunWithAayush />} />
          <Route path="/projects/vicinal" element={<Vicinal />} />
          <Route path="/projects/lifesimulator" element={<LifeSimulator />} />
          <Route path="/projects/shufflecharacters" element={<ShuffleCharacters />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
