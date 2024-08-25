import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="header">
        <nav>
          <div>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}>
                  Get in Touch
                </Link>
              </li>
            </ul>
            <p>SophDev360.</p>
          </div>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/abdul-aziz-moh"
              target="_blank"
              rel="noopener noreferrer">
              <img src="/linkedin.png" alt="linkedin" className="linkedin" />
            </a>
            <a
              href="https://github.com/moh-aziz-360"
              target="_blank"
              rel="noopener noreferrer">
              <img src="/github.png" alt="github" className="github" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
