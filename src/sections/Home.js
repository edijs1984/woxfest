import React, { useState } from "react";
import { calculate } from "../components/counter";
function Home() {
  const [data, setData] = useState([]);

  const res = async () => {
    const val = await calculate();
    setData(val);
  };

  window.setInterval(() => res(), 1000);

  return (
    <div className="home" id="home">
      <div className="mob">
        <div className="styles">MŪZIKA</div>
        <div className="styles">MĀKSLA</div>
        <div className="styles">TEĀTRIS</div>
        <div className="stylesgreen">12.-14.08.</div>
        <div className="stylesgreen">2022.</div>
      </div>

      <div className="counterstyle">
        <div className="stylesgreen">ATLICIS:</div>
        <div className="numberstyle">
          {data[0] +
            " " +
            ":" +
            " " +
            data[1] +
            " " +
            ":" +
            " " +
            data[2] +
            " " +
            ":" +
            " " +
            data[3]}
        </div>
      </div>
    </div>
  );
}

export default Home;
