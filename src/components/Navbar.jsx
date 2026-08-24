import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Send, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ currentTheme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'strengths', label: 'What I Bring' },
    { id: 'journey', label: 'Learning Journey' },
    { id: 'vision', label: 'Future Vision' },
    { id: 'build', label: 'Vision to Build' },
    { id: 'career', label: 'Career Goal' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="nav-brand"
          aria-label="Pallavi Srinivas Home"
        >
          <div className="brand-badge">PS</div>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            title={currentTheme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            aria-label="Toggle Theme"
          >
            {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary btn-sm"
          >
            <span>Let's Connect</span>
            <Send size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Send size={16} />
              <span>Contact Me Directly</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
