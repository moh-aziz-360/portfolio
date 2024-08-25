import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="about-intro">
            <a href="/public/mine.png">
              <img
                src="/public/mine.png"
                alt="Your Name"
                className="about-photo"
              />
            </a>
            <h2>About Me</h2>
            <p>
              Hello! I’m <strong>Mohammed Abdul Aziz</strong>, a dedicated web
              developer with a passion for crafting seamless user experiences
              and solving complex problems.
              <br /> My journey in tech began [2] years ago, and since then,
              I’ve had the opportunity to work on diverse projects that have
              honed my skills and broadened my perspective.
            </p>
          </div>

          <div className="about-section">
            <h3>Background</h3>
            <p>
              I am self taught web developer. working with teams to build
              innovative web applications and contribute to exciting projects. I
              successfully graduated from high school 2yeasrs ago(2022), now in
              college pursuing a Bsc degree in Mathematics.
            </p>
          </div>

          <div className="about-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>
                <strong>Languages:</strong> HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Frameworks:</strong> React
              </li>
              <li>
                <strong>Tools:</strong> Git,Vite
              </li>
              <li>
                <strong>Design:</strong> Responsive and Interactive web designs.
              </li>
            </ul>
          </div>

          {/* <div className="about-section">
            <h3>Achievements</h3>
            <ul className="achievements-list">
              <li>
                Developed a highly successful e-commerce platform that increased
                sales by 30%.
              </li>
              <li>
                Completed a certification in Advanced Web Development with
                [Certification Body].
              </li>
            </ul>
          </div> */}

          <div className=" hobbies">
            <h3>Hobbies & Interests</h3>
            <p>
              When I’m not coding, I enjoy Reading books, Exploring interesting
              academic articles, and Playing Games. These activities not only
              help me unwind but also inspire my creative process and keep me
              motivated to tackle new challenges.
            </p>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default About;
