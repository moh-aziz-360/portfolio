import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./styles/global.css";
import "./styles/home-page.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./components/Projects";

const App = () => {
  const location = useLocation();
  
  // Scroll to top on route change and manage body class for home page
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add or remove home-page-active class based on current route
    if (location.pathname === '/') {
      document.body.classList.add('home-page-active');
      document.body.style.overflow = 'hidden'; // Disable scrolling on home page
    } else {
      document.body.classList.remove('home-page-active');
      document.body.style.overflow = 'auto'; // Enable scrolling on other pages
    }
    
    return () => {
      document.body.classList.remove('home-page-active');
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
};

export default App;