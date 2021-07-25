import React from "react";
import Home from "./Home";
import Artists from "./Artists";
import Program from "./Programm";

const Main = () => {
  return (
    <div>
      <div
        style={{ height: "100vh", width: "100%", background: "#ffe087" }}
        id="home"
      >
        <Home />
      </div>
      <div
        style={{ height: "100vh", width: "100%", background: "#fa4848" }}
        id="artists"
      >
        <Artists />
      </div>
      <div
        style={{ height: "100vh", width: "100%", background: "#5639a6" }}
        id="program"
      >
        <Program />
      </div>
      <div
        style={{ height: "100vh", width: "100%", background: "#5639a6" }}
        id="third"
      >
        third
      </div>
    </div>
  );
};

export default Main;
