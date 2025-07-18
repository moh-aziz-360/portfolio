import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roles] = useState(["Front-End Developer", "Mobile App Developer", "UI/UX Designer"]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Handle 3D tilt effect on profile image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Advanced typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentRole.length) {
        setCurrentCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      } else if (!isDeleting && currentCharIndex === currentRole.length) {
        setTypingSpeed(2000); // Pause at the end
        setIsDeleting(true);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(300);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentRoleIndex, isDeleting, roles, typingSpeed]);

  // Set visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleHireMe = () => {
    const phoneNumber = 233595107319;
    const message = "Hello, I would like to discuss a potential project with you";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleExploreProjects = () => {
    navigate("/projects");
  };

  const currentRole = roles[currentRoleIndex];
  const displayText = currentRole.substring(0, currentCharIndex);

  return (
    <div className="portfolio-container">
      <section className={`hero-main ${isVisible ? 'visible' : ''}`}>
        {/* Animated background elements */}
        <div className="animated-background">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="gradient-blob blob-3"></div>
          <div className="grid-lines"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-text-column">
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span className="status-text">Available for new projects</span>
            </div>
            
            <h1 className="hero-title">
              <span className="greeting-text">Hello, I'm</span>
              <span className="name-text">Mohammed Abdul Aziz</span>
            </h1>
            
            <div className="role-wrapper">
              <span className="role-prefix">I'm a </span>
              <span className="role-text">{displayText}</span>
              <span className="cursor-blink">|</span>
            </div>
            
            <p className="hero-bio">
              I craft exceptional digital experiences that combine stunning design with 
              flawless functionality. My work focuses on creating intuitive, responsive 
              solutions that help businesses achieve their goals.
            </p>
            
            <div className="cta-buttons">
              <button onClick={handleHireMe} className="primary-cta">
                <span className="btn-content">Let's Work Together</span>
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
              <button onClick={handleExploreProjects} className="secondary-cta">
                <span className="btn-content">View Portfolio</span>
                <span className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual-column">
            <div 
              ref={profileRef}
              className="profile-container"
            >
              <div className="profile-overlay"></div>
              <div className="profile-circle-frame">
                <img src="/mine.png" alt="Mohammed Abdul Aziz" className="profile-img" />
              </div>
              <div className="profile-glow"></div>
              <div className="profile-dots"></div>
              
              {/* Skills on the image */}
              <div className="skills-overlay">
                <h3 className="expertise-title">Expertise</h3>
                <div className="mini-skills-grid">
                  <div className="mini-skill-card" data-percent="95">
                    <div className="mini-skill-inner">
                      <div className="mini-skill-front">
                        <img src="/html.png" alt="HTML5" className="mini-skill-icon" />
                        <span className="skill-name">HTML5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mini-skill-card" data-percent="90">
                    <div className="mini-skill-inner">
                      <div className="mini-skill-front">
                        <img src="/css.png" alt="CSS3" className="mini-skill-icon" />
                        <span className="skill-name">CSS3</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mini-skill-card" data-percent="85">
                    <div className="mini-skill-inner">
                      <div className="mini-skill-front">
                        <img src="/js.png" alt="JavaScript" className="mini-skill-icon" />
                        <span className="skill-name">JavaScript</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mini-skill-card" data-percent="88">
                    <div className="mini-skill-inner">
                      <div className="mini-skill-front">
                        <img src="/react.png" alt="React" className="mini-skill-icon" />
                        <span className="skill-name">React</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;