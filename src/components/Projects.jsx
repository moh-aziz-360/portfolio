import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-fledged e-commerce platform for online shopping.",
    videoSrc: "/technest.mp4",
    imageSrc: [
      "/Frame 9 - technest.jpg",
      "/Frame 2 - technest.jpg",
      "/Frame 14 - technest.jpg",
      "/technest-purchase.png",
    ],
  },
  {
    title: "To-Do",
    description: "A To-do web app with user authentication.",
    videoSrc: "/todo.mp4",
    imageSrc: [
      "/Frame 11 - todo.jpg",
      "/Frame 3 - todo.jpg",
      "/Frame 5 - todo.jpg",
      "/Frame 11 - todo.jpg",
    ],
  },
  {
    title: "Weather Fetch App",
    description: "A web app for fetching weather.",
    videoSrc: "/weather.mp4",
    imageSrc: [
      "/weather1.png",
      "/weather2.png",
      "/weather3.png",
      "/weather4.png",
    ],
  },
];

const ProjectImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="images-section">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Project Image ${currentIndex + 1}`}
          className="project-image"
        />
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}></span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-wrapper">
        <button
          className="prev-button"
          onClick={handlePrevProject}
          aria-label="Previous Project">
          ˂
        </button>
        <div className="project-card">
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <div className="media-grid">
            <div className="video-section">
              {currentProject.videoSrc ? (
                <video controls src={currentProject.videoSrc}></video>
              ) : (
                <div className="video-placeholder">Loading...</div>
              )}
            </div>

            <ProjectImages images={currentProject.imageSrc} />
          </div>
        </div>
        <button
          className="next-button"
          onClick={handleNextProject}
          aria-label="Next Project">
          ˃
        </button>
      </div>
    </div>
  );
};

export default Projects;
