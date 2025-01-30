import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src="good.png" alt="Hize Logo" className="logo" />
          </Link>

          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/services" className="services-link">
              OUR SERVICES
              <span className="dropdown-arrow">▼</span>
            </Link>
            <Link to="/why">WHY HIZE?</Link>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Search.." />
            <button className="search-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.7 14.3L11.9 10.5C12.9 9.3 13.5 7.7 13.5 6C13.5 2.7 10.8 0 7.5 0C4.2 0 1.5 2.7 1.5 6C1.5 9.3 4.2 12 7.5 12C9.2 12 10.8 11.4 12 10.4L15.8 14.2C15.9 14.3 16 14.3 16.1 14.3C16.2 14.3 16.3 14.3 16.4 14.2C16.6 14 16.6 13.6 15.7 14.3ZM7.5 11C4.7 11 2.5 8.8 2.5 6C2.5 3.2 4.7 1 7.5 1C10.3 1 12.5 3.2 12.5 6C12.5 8.8 10.3 11 7.5 11Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <button className="contact-btn">Contact Us</button>
          <div className="language-select">
            <a href="#es" className="active">ES</a>
            <a href="#en">EN</a>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/services" className="mobile-services-link">
            OUR SERVICES
            <span className="dropdown-arrow">▼</span>
          </Link>
          <Link to="/why">WHY HIZE?</Link>
          
          <div className="mobile-bottom-section">
            <div className="search-box">
              <input type="text" placeholder="Search.." />
              <button className="search-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.7 14.3L11.9 10.5C12.9 9.3 13.5 7.7 13.5 6C13.5 2.7 10.8 0 7.5 0C4.2 0 1.5 2.7 1.5 6C1.5 9.3 4.2 12 7.5 12C9.2 12 10.8 11.4 12 10.4L15.8 14.2C15.9 14.3 16 14.3 16.1 14.3C16.2 14.3 16.3 14.3 16.4 14.2C16.6 14 16.6 13.6 15.7 14.3ZM7.5 11C4.7 11 2.5 8.8 2.5 6C2.5 3.2 4.7 1 7.5 1C10.3 1 12.5 3.2 12.5 6C12.5 8.8 10.3 11 7.5 11Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <button className="contact-btn">Contact Us</button>
            <div className="language-select">
              <a href="#es" className="active">ES</a>
              <a href="#en">EN</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;