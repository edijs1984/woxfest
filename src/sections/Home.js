import React from "react";

function Home() {
  const styles = { padding: "7%", color: "white" };
  const stylesgreen = { padding: "7%", color: "#99ff00" };

  var countDownDate = new Date("August 12, 2022 15:00:00").getTime();
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const counterstyle = {
    marginTop: "7%",
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  const numbergenralstyle = {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
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
    <div className="section section-home">
      <div style={{ alignContent: "flex-start" }}>
        <div style={styles}>Mūzika</div>
        <div style={styles}>Māksla</div>
        <div style={styles}>Teātris</div>
        <div style={stylesgreen}>12.-14.08.</div>
        <div style={stylesgreen}>2022.</div>
      </div>
      <div style={counterstyle}>
        <div style={numbergenralstyle}>
          {days}
          <div style={textstyle}>dienas</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {hours}
          <div style={textstyle}>stundas</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {minutes}
          <div style={textstyle}>minutes</div>
        </div>
        <div style={{ color: "white" }}>:</div>
        <div style={numberstyle}>
          {seconds}
          <div style={textstyle}>sekundes</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
