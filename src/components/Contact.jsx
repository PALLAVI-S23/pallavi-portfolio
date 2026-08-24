import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire subtle celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#34d399', '#6366f1']
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }

      // Reset form after a delay or preserve state
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="subheading-text">
            Feel free to reach out for academic collaborations, projects, mentorship, or discussing data science concepts.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="contact-info-col">
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '6px' }}>
                {personalInfo.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {personalInfo.degree}
              </p>
            </div>

            {/* Email Card */}
            <div className="contact-direct-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-details-wrap">
                <span className="contact-type">Email Address</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="contact-value" 
                  title="Send email directly"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? <Check size={18} color="#34d399" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-direct-card">
              <div className="contact-icon-box" style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#34d399' }}>
                <Phone size={22} />
              </div>
              <div className="contact-details-wrap">
                <span className="contact-type">Phone Number</span>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="contact-value"
                  title="Call directly"
                >
                  {personalInfo.formattedPhone} ({personalInfo.phone})
                </a>
              </div>
              <button 
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="copy-btn"
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {copiedField === 'phone' ? <Check size={18} color="#34d399" /> : <Copy size={18} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-direct-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="contact-icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                <Linkedin size={22} />
              </div>
              <div className="contact-details-wrap">
                <span className="contact-type">Professional Network</span>
                <span className="contact-value">
                  linkedin.com/in/pallavi-srinivas...
                </span>
              </div>
              <ExternalLink size={18} color="var(--text-muted)" />
            </a>

            {/* Availability Notice */}
            <div style={{
              marginTop: '10px',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(56, 189, 248, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              <Sparkles size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <span>Open to learning opportunities, student projects, hackathons, and technical discussions.</span>
            </div>
          </div>

          {/* Right Column: Interactive UI Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">
              Have a question or want to collaborate? Leave a note below.
            </p>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle2 size={20} color="#34d399" />
                <span>
                  Thank you! Your message has been prepared. Since this is a frontend demo form, feel free to also reach me directly at <strong>{personalInfo.email}</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Alex Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  style={{ borderColor: errors.name ? '#f43f5e' : undefined }}
                  required
                />
                {errors.name && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e' }}>{errors.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  style={{ borderColor: errors.email ? '#f43f5e' : undefined }}
                  required
                />
                {errors.email && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e' }}>{errors.email}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Share details about your project, idea, or connection request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  style={{ borderColor: errors.message ? '#f43f5e' : undefined }}
                  required
                ></textarea>
                {errors.message && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e' }}>{errors.message}</span>
                )}
              </div>

              {/* Disclaimer Notice */}
              <div className="form-disclaimer">
                <Info size={14} />
                <span>Client-side interactive demonstration form with field validation.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '6px' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
