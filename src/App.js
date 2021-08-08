import React from "react";
import NavBar from "./components/NavBar";
import { ScrollingProvider } from "react-scroll-section";
import ScrollArrow from "./components/ScrollArrow";

import Home from "./sections/Home";
import Artists from "./sections/Artists";
import Programm from "./sections/Programm";
import Tickets from "./sections/Tickets";

import "./sass/main.scss";

function App() {
  return (
    <div className="maincontainer">
      <ScrollingProvider>
        <ScrollArrow />
        <NavBar />
        <Home />
        <Artists />
        <Programm />
        <Tickets />
      </ScrollingProvider>
    </div>
  );
}

export default App;
