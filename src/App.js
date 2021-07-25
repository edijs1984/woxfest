import React from "react";
import NavBar from "./components/NavBar";

import { ScrollingProvider } from "react-scroll-section";
import Home from "./sections/Home";
import Artists from "./sections/Artists";
import Programm from "./sections/Programm";
import ScrollArrow from "./components/ScrollArrow";
import "./sass/main.scss";

function App() {
  return (
    <div className="maincontainer">
      <ScrollingProvider>
        <ScrollArrow />
        <NavBar />
        <Home />
        <Artists id="artists" />
        <Programm />
      </ScrollingProvider>
    </div>
  );
}

export default App;
