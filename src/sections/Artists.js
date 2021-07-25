import React from "react";
import ArtistCard from "../components/ArtistCard";
import a from "../images/wox1.png";
function Artists() {
  return (
    <div className="section section-artists" id="artists">
      <div className="artisthead">MĀKSLINIEKI</div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
      <div className="cardrow">
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
        <ArtistCard picture={a} />
      </div>
    </div>
  );
}

export default Artists;
