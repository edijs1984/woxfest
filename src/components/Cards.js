import React from "react";

function Cards({ heading, price, redirect }) {
  return (
    <a className="ticket" href={redirect} target="blank">
      <div className="tickethead">{heading}</div>
      <div className="ticketbody">{price}</div>
    </a>
  );
}

export default Cards;
