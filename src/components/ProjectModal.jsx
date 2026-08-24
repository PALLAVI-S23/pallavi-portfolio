import React, { useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Tag, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 13, 24, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div 
        className="modal-content card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '640px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '32px',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-card)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '16px' }}>
          <span className="badge badge-foundation" style={{ marginBottom: '8px' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-main)', marginTop: '4px' }}>
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.05em' }}>
            Project Overview
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Practical Experience Reflection */}
        <div style={{ 
          background: 'rgba(7, 13, 24, 0.6)', 
          borderLeft: '3px solid var(--accent-cyan)', 
          borderRadius: 'var(--radius-sm)',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: '700', marginBottom: '6px' }}>
            Academic & Practical Insight:
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            "{project.additionalInfo}"
          </p>
        </div>

        {/* Key Learnings */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '12px', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={16} color="#34d399" />
            Key Competencies & Learnings:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {project.keyLearnings.map((learning, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <CheckCircle2 size={15} color="#34d399" style={{ flexShrink: 0 }} />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.05em' }}>
            Associated Technologies & Tags
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="badge-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
