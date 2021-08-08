import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const openNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav>
        <div onClick={() => openNav()} className="hamburger">
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        <ul className={open ? "nav-links2" : "nav-links"}>
          <li
            className={activeNav === 1 ? "liactive" : ""}
            onClick={() => {
              setActiveNav(1);
              setOpen(!open);
            }}
          >
            <a href="#home">sākums</a>
          </li>
          <li
            onClick={() => {
              setActiveNav(3);
              setOpen(!open);
            }}
            className={activeNav === 3 ? "liactive" : ""}
          >
            <a href="#artists">mākslinieki</a>
          </li>
          <li
            onClick={() => {
              setActiveNav(2);
              setOpen(!open);
            }}
            className={activeNav === 2 ? "liactive" : ""}
          >
            <a href="#program">programma</a>
          </li>
          <li
            onClick={() => {
              setActiveNav(4);
              setOpen(!open);
            }}
            className={activeNav === 4 ? "liactive" : ""}
          >
            <a href="#tickets">biļetes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
