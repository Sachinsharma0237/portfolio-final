import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sachin</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/sachinnnsharmaaa/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-sharma-052875144/"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; SachinSharma. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
