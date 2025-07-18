import React, { useState, useEffect, useRef } from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-fledged e-commerce platform for online shopping with product catalog, shopping cart, and secure checkout functionality.",
    videoSrc: "/technest.mp4",
    imageSrc: [
      "/Frame 9 - technest.jpg",
      "/Frame 2 - technest.jpg",
      "/Frame 14 - technest.jpg",
      "/technest-purchase.png",
    ],
    tags: ["React", "CSS", "JavaScript", "E-commerce"]
  },
  {
    id: 2,
    title: "To-Do Application",
    description: "A feature-rich to-do web application with user authentication, task categorization, and progress tracking capabilities.",
    videoSrc: "/todo.mp4",
    imageSrc: [
      "/Frame 11 - todo.jpg",
      "/Frame 3 - todo.jpg",
      "/Frame 5 - todo.jpg",
      "/Frame 11 - todo.jpg",
    ],
    tags: ["React", "CSS", "JavaScript", "Authentication"]
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A responsive weather application that provides real-time weather data and forecasts for locations worldwide.",
    videoSrc: "/weather.mp4",
    imageSrc: [
      "/weather1.png",
      "/weather2.png",
      "/weather3.png",
      "/weather1.png",
    ],
    tags: ["React", "API Integration", "JavaScript", "Weather Data"]
  },
];

const ProjectImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-gallery">
      {images.map((src, index) => (
        <div 
          key={index} 
          className={`gallery-item ${currentIndex === index ? "active" : ""}`}
        >
          <img src={src} alt={`Project screenshot ${index + 1}`} />
        </div>
      ))}
      
      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <section className={`projects-section ${isLoaded ? "loaded" : ""}`} ref={projectsRef}>
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="project-showcase">
          <div className="project-navigation">
            <div className="project-counter">
              <span className="current">{currentProjectIndex + 1}</span>
              <span className="separator">/</span>
              <span className="total">{projectsData.length}</span>
            </div>
            
            <div className="navigation-controls">
              <button
                className="nav-button prev"
                onClick={handlePrevProject}
                aria-label="Previous Project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="nav-button next"
                onClick={handleNextProject}
                aria-label="Next Project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-info">
                <h3 className="project-title">{currentProject.title}</h3>
                <p className="project-description">{currentProject.description}</p>
                <div className="project-tags">
                  {currentProject.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-media">
                <div className="project-video">
                  <video controls src={currentProject.videoSrc} poster={currentProject.imageSrc[0]}></video>
                </div>

                <ProjectImages images={currentProject.imageSrc} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="grid-overlay"></div>
      </div>
    </section>
  );
};

export default Projects;