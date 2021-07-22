import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";

import "./sass/main.scss";

function App() {
  return (
    <div className="maincontainer">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
