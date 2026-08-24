import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Database, 
  GitBranch, 
  GitPullRequest, 
  Terminal, 
  TrendingUp, 
  Bot, 
  Network, 
  PieChart, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const iconMap = {
    Code2: <Code2 size={20} />,
    FileCode: <FileCode size={20} />,
    Database: <Database size={20} />,
    GitBranch: <GitBranch size={20} />,
    GitPullRequest: <GitPullRequest size={20} />,
    Terminal: <Terminal size={20} />,
    TrendingUp: <TrendingUp size={20} />,
    Bot: <Bot size={20} />,
    Network: <Network size={20} />,
    PieChart: <PieChart size={20} />
  };

  const filteredCategories = activeFilter === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.id === activeFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="subheading-text">
            My foundational technical toolkit alongside domains I am actively exploring and studying in my degree.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-nav">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            All Categories ({skillsData.categories.length})
          </button>
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-tab-btn ${activeFilter === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-header">
                <h3 className="category-name">{category.name}</h3>
                <span className={`badge ${category.badgeType === 'foundation' ? 'badge-foundation' : 'badge-growth'}`}>
                  {category.badgeType === 'foundation' ? (
                    <CheckCircle2 size={12} />
                  ) : (
                    <Sparkles size={12} />
                  )}
                  {category.status}
                </span>
              </div>

              <p className="category-desc">{category.description}</p>

              {/* Skills List */}
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-top-row">
                      <div className="skill-name-wrap">
                        <span className="skill-icon">
                          {iconMap[skill.icon] || <Code2 size={18} />}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-tag">{skill.tag}</span>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Foundation Callout */}
        <div className="foundation-notice">
          <ShieldCheck size={20} color="#34d399" />
          <span>
            <strong>Authentic Skill Representation:</strong> All tools are displayed in alignment with my current stage as a B.Tech student building solid foundational competency, hands-on practice, and structured knowledge.
          </span>
        </div>
      </div>
    </section>
  );
}
