import React from "react";

function ArtistCard({ picture }) {
  return (
    <div className="card">
      <img src={picture} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
      </div>
    </div>
  );
}

export default ArtistCard;
