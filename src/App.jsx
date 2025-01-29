import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHoveringButton(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{
          position: 'fixed', 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      >
        <div 
          style={{
            width: isHoveringButton ? '60px' : '20px', 
            height: isHoveringButton ? '60px' : '20px',
            borderRadius: '50%', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            border: '2px solid rgba(0, 0, 0, 0.5)',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.8)',
            transition: 'all 0.3s ease'
          }}
        />
      </div>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;