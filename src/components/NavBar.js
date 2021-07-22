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
        </div>
        <ul className={open ? "nav-links2" : "nav-links"}>
          <li
            onClick={() => setActiveNav(1)}
            className={activeNav == 1 ? "liactive" : ""}
          >
            <a href="#">sākums</a>
          </li>
          <li
            onClick={() => setActiveNav(2)}
            className={activeNav == 2 ? "liactive" : ""}
          >
            <a href="#">programma</a>
          </li>
          <li
            onClick={() => setActiveNav(3)}
            className={activeNav == 3 ? "liactive" : ""}
          >
            <a href="#">mākslinieki</a>
          </li>
          <li
            onClick={() => setActiveNav(4)}
            className={activeNav == 4 ? "liactive" : ""}
          >
            <a href="#">biļetes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
