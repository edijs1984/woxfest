import React, { useState } from "react";
import { calculate } from "../components/counter";
function Home() {
  const [data, setData] = useState([]);

  const styles = { padding: "7%", color: "white" };
  const stylesgreen = { padding: "7%", color: "#99ff00" };

  const res = async () => {
    const val = await calculate();
    setData(val);
  };

  window.setInterval(() => res(), 1000);

  const counterstyle = {
    marginTop: "7%",
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  const numberstyle = {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
  };
  const textstyle = {
    fontSize: "1rem",
    color: "white",
  };

  return (
    <div className="section section-home" id="home">
      <div style={{ alignContent: "flex-start" }}>
        <div style={styles}>MŪZIKA</div>
        <div style={styles}>MĀKSLA</div>
        <div style={styles}>TEĀTRIS</div>
        <div style={stylesgreen}>12.-14.08.</div>
        <div style={stylesgreen}>2022.</div>
      </div>
      <div style={counterstyle}>
        <div style={numberstyle}>
          {data[0]}
          <div style={textstyle}>dienas</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {data[1]}
          <div style={textstyle}>stundas</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {data[2]}
          <div style={textstyle}>minūtes</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {data[3]}
          <div style={textstyle}>sekundes</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
