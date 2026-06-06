import React, { useState } from "react";
import "./Header.css";
import homeIcon from "../../assets/files.svg";

const Header = () => {
  /* =====================Change Background Header================== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 560 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* =====================Toogle Menu================== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <svg
            width="150"
            height="80"
            viewBox="0 0 400 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="leftBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E5E7EB" />
                <stop offset="100%" stop-color="#D1D5DB" />
              </linearGradient>
            </defs>

            <rect
              x="1"
              y="1"
              width="398"
              height="78"
              rx="12"
              fill="#FFFFFF"
              stroke="#C0C0C0"
              stroke-width="2"
            />

            <polygon points="0,0 120,0 90,80 0,80" fill="url(#leftBg)" />

            <text
              x="50"
              y="55"
              text-anchor="middle"
              font-family="Georgia, serif"
              font-size="42"
              font-weight="bold"
              fill="#111111"
            >
              SS
            </text>

            <text
              x="240"
              y="52"
              text-anchor="middle"
              font-family="Arial, Helvetica, sans-serif"
              font-size="28"
              font-style="italic"
              font-weight="700"
              fill="#111111"
            >
              SACHIN SHARMA
            </text>
          </svg>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#products"
                onClick={() => setActiveNav("#products")}
                className={
                  activeNav === "#products"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Products
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#clients"
                onClick={() => setActiveNav("#clients")}
                className={
                  activeNav === "#clients"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Clients
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
