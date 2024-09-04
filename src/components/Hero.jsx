import React from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const handleClick = () => {
    const phoneNumber = 233595107319;
    const message =
      "Hello, I would like to discuss a potential project with you and if possible hire you";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const navigate = useNavigate();
  const handleToProjectsPage = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className="hero">
        <img src="/mine.png" alt="" />
      </div>
      <div className="intro">
        <h3>Who am I ?</h3>
        <hr />
        <p className="hi">
          Hi! I’m a Front-End Web Developer with a passion for crafting
          beautiful and responsive websites. I specialize in creating designs
          that are both visually stunning and user-friendly. I love turning
          ideas into interactive web experiences that work seamlessly across all
          devices.
          <br />
          <span className="yeah">
            {" "}
            Let’s build something amazing together!....
          </span>
        </p>
      </div>

      <div className="skills">
        <h1>SKILLSET</h1>
        <ul>
          <li>
            <img src="/html.png" alt="HTML" />
            <span>HTML</span>
          </li>
          <li>
            <img src="/css.png" alt="CSS" />
            <span>CSS</span>
          </li>
          <li>
            <img src="/js.png" alt="JavaScript" />
            <span>JAVASCRIPT</span>
          </li>
          <li>
            <img src="/react.png" alt="React" />
            <span>REACT</span>
          </li>
        </ul>
      </div>

      <button onClick={handleClick} className="hire">
        Hire Me
      </button>
      <button onClick={handleToProjectsPage} className="explore">
        Explore Projects
      </button>
    </>
  );
};

export default Hero;
