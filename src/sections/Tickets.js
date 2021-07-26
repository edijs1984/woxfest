import React from "react";
import Cards from "../components/Cards";

function Tickets() {
  const redirect =
    "https://www.bilesuserviss.lv/lat/biletes/muzika/summer-sound-festivals-2022-66746/";
  return (
    <div className="section section-tickets" id="tickets">
      <div className="artisthead">BIĻETES</div>
      <div className="tickets">
        <Cards
          heading={"Festivāla biļete"}
          price={"Cena 40 euro"}
          redirect={redirect}
        />
        <Cards
          heading={"1 dienas biļete"}
          price={"Cena 25 euro"}
          redirect={redirect}
        />
        <Cards
          heading={"1 teātra izrādes biļete"}
          price={"Cena 10 euro"}
          redirect={redirect}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Tickets;
