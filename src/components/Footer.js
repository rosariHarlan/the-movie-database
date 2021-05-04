import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import SVG from "../assets/Vector (1).svg";
import Face from "../assets/Vector (2).svg";
import Mov from "../assets/MOV.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-footer">
      <div className="logo">
        <Link to="/">
          <img src={Mov} alt="logo" />
        </Link>
      </div>
      <p>Imprint</p>
      </div>
      
      <div className="container-rrss">
        <a  href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <img className="soMe" src={SVG} alt="instagram icon" />
        </a>
        <a  href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <img className="soMe" src={Face} alt="facebook icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
