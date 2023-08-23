import React, { useEffect } from "react";
import "../Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import mouseMove from "../Utilities/mouseMove";
import ShareYourStory from "./Projects/ShareYourStory";
import FunWithAayush from "./Projects/FunWithAayush";
import Vicinal from "./Projects/Vicinal";
import RandomYoutubeApi from "./Projects/RandomYoutubeApi";
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
          <Route path="/projects/shareyourstory" element={<ShareYourStory />} />
          <Route path="/projects/funwithaayush" element={<FunWithAayush />} />
          <Route path="/projects/vicinal" element={<Vicinal />} />
          <Route path="/projects/randomyoutubeapi" element={<RandomYoutubeApi />} />
          <Route path="/projects/shufflecharacters" element={<ShuffleCharacters />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
