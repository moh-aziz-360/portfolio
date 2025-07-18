import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";
import "../styles/header-elegant.css";
import "../styles/header.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <h1 className="logo">
          <span className="logo-text">
            Soph<span className="logo-accent">Dev</span>360
          </span>
        </h1>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger-icon">
            <span className={`line ${isMenuOpen ? "active" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "active" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "active" : ""}`}></span>
          </div>
        </button>

        <nav className="nav">
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="social-icons"></div>
      </div>
    </header>
  );
};

export default Header;
