import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Me</h1>
          <p>Passionate developer crafting digital experiences</p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-profile animate-on-scroll">
          <div className="profile-image-container">
            <img src="/mine.png" alt="Mohammed Abdul Aziz" />
          </div>
          <div className="profile-details">
            <h2>Mohammed Abdul Aziz</h2>
            <p className="profile-tagline">
              Full-Stack Web & Mobile App Developer
            </p>
            <p className="profile-description">
              Hello! I'm a dedicated web developer with a passion for crafting
              seamless user experiences and solving complex problems. My journey
              in tech began years ago, and since then, I've had the opportunity
              to work on diverse projects that have honed my skills and
              broadened my perspective.
            </p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section-card journey animate-on-scroll">
            <h3>My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>2022</h4>
                  <p>Graduated from high school with distinction</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>2025 - Present</h4>
                  <p>Pursuing BSc degree in Physics</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>2024 - Present</h4>
                  <p>Working as a freelance web developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section-card skills animate-on-scroll">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-grid">
                  <div className="skill-item">
                    <div className="skill-icon html"></div>
                    <div className="skill-info">
                      <span>HTML5</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon css"></div>
                    <div className="skill-info">
                      <span>CSS3</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon js"></div>
                    <div className="skill-info">
                      <span>JavaScript</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon react"></div>
                    <div className="skill-info">
                      <span>React</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-category">
                <h4>Mobile</h4>
                <div className="skill-grid">
                  <div className="skill-item">
                    <div className="skill-icon react-native"></div>
                    <div className="skill-info">
                      <span>React Native</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon flutter"></div>
                    <div className="skill-info">
                      <span>Flutter</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section-card interests animate-on-scroll">
            <h3>Interests & Hobbies</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <div className="interest-icon reading"></div>
                <span>Reading</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon research"></div>
                <span>Research</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon gaming"></div>
                <span>Gaming</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon coding"></div>
                <span>Coding</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon collaboration"></div>
                <span>Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
