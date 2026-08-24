import React from 'react';
import { Mail, Phone, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'strengths', label: 'What I Bring' },
    { id: 'journey', label: 'Learning Journey' },
    { id: 'vision', label: 'Future Vision' },
    { id: 'career', label: 'Career Goal' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Persona */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="brand-badge">PS</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{personalInfo.name}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {personalInfo.title}
            </p>
            <p className="footer-motto">
              "{personalInfo.motto}"
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links-list">
              {navLinks.slice(0, 5).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className="footer-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Explore</h4>
            <div className="footer-links-list">
              {navLinks.slice(5).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className="footer-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact Direct Links */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="social-icon-btn"
                aria-label="Call Phone"
                title="Call Phone"
              >
                <Phone size={18} />
              </a>
            </div>

            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '8px' }}>
              {personalInfo.email}
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>{personalInfo.copyright}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built with care for learning & growth</span>
            <Heart size={14} color="#f43f5e" fill="#f43f5e" />
          </div>
        </div>
      </div>
    </footer>
  );
}
