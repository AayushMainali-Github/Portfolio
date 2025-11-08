import React, { useEffect } from "react";
import "../Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import mouseMove from "../Utilities/mouseMove";
import ProgrammingMastery from "./Projects/ProgrammingMastery";
import FunWithAayush from "./Projects/FunWithAayush";
import Skepa from "./Projects/Skepa";
import LifeSimulator from "./Projects/LifeSimulator";
import NumberTheory2 from "./Projects/NumberTheory2";

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
          <Route path="/projects/funwithaayush" element={<FunWithAayush />} />
          <Route path="/projects/numbertheory2" element={<NumberTheory2 />} />
          <Route path="/projects/skepa" element={<Skepa />} />
          <Route path="/projects/lifesimulator" element={<LifeSimulator />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
