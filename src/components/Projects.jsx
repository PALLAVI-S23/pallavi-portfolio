import React, { useState } from 'react';
import { 
  Activity, 
  Car, 
  CloudRain, 
  CheckCircle2, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const iconMap = {
    Activity: <Activity size={24} />,
    Car: <Car size={24} />,
    CloudRain: <CloudRain size={24} />
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Practical Implementation</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="subheading-text">
            Hands-on academic and practical projects applying database engineering, IoT hardware-software integration, and structured problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{
                borderColor: 'var(--border-card)'
              }}
            >
              {/* Subtle Project Index Number in background */}
              <div className="project-number">{project.number}</div>

              <div>
                {/* Category & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    {iconMap[project.icon] || <Layers size={24} />}
                  </div>

                  <span className="project-category-badge">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="project-title">{project.title}</h3>

                {/* Description */}
                <p className="project-desc">{project.shortDesc}</p>

                {/* Additional Insight Callout */}
                <div className="project-additional">
                  "{project.additionalInfo}"
                </div>

                {/* Key Learnings List */}
                <div className="key-learnings-section">
                  <div className="key-learnings-title">
                    <CheckCircle2 size={15} color="#34d399" />
                    <span>Key Learnings</span>
                  </div>
                  <ul className="key-learnings-list">
                    {project.keyLearnings.map((learning, idx) => (
                      <li key={idx} className="key-learning-item">
                        <CheckCircle2 size={13} />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Details & Tags */}
              <div>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', marginTop: '18px', justifyContent: 'center' }}
                  aria-label={`View deep details for ${project.title}`}
                >
                  <Info size={14} />
                  <span>View Project Breakdown</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
