"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Bob Wiley Counseling" className="navbar-logo-img" />
        </Link>
        <nav className="navbar-nav desktop-nav">
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#resources" className="nav-link">Free Resources</Link>
          <Link href="#hero" className="btn btn-primary btn-sm">Book Consult</Link>
        </nav>
        
        {/* Mobile menu toggle button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="mobile-menu-body container">
          <nav className="mobile-nav-links">
            <Link href="/" className="mobile-logo-link" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Bob Wiley Counseling" className="navbar-logo-img" />
            </Link>
            <Link href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</Link>
            <Link href="#about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
            <Link href="#resources" className="mobile-nav-link" onClick={closeMenu}>Free Resources</Link>
            <Link href="#hero" className="btn btn-primary btn-lg mobile-nav-btn" onClick={closeMenu}>Book Consult</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
