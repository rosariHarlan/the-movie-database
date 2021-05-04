import { Link } from "react-router-dom";
import React, { useState } from "react";
import Mov from "../assets/MOV.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="nav-container">
      <div className="logo">
        <Link to="/">
          <img src={Mov} alt="logo" />
        </Link>
      </div>
      <nav className="right-side-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}>
            <Link to="/add">Add Movies</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/new">What's New</Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <img src={close} alt="close" />
          ) : (
            <img src={menu} alt="menu" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
