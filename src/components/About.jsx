import React from 'react';
import { GraduationCap, Cpu, LineChart, Sparkles, Code2, Heart, Award, ArrowUpRight } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: <GraduationCap size={22} />,
    Cpu: <Cpu size={22} />,
    LineChart: <LineChart size={22} />,
    Sparkles: <Sparkles size={22} />
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Background & Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="subheading-text">
            A look into my academic journey, core foundations, and passion for turning data into meaningful solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Structured Narrative Paragraphs */}
          <div className="about-story">
            <div className="story-card">
              <p>
                <strong>I am {personalInfo.shortName}</strong>, a B.Tech student specializing in{' '}
                <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
                  Artificial Intelligence and Data Science
                </span>. I am passionate about technology, programming, and using data to understand and solve real-world problems.
              </p>
              <p>
                I have a growing foundation in <strong>Python, C, and MySQL</strong>, along with practical experience using modern developer tools such as <strong>Git, GitHub, and VS Code</strong>.
              </p>
              <p>
                Through academic and practical projects, I am actively developing my <strong>problem-solving, communication, and teamwork</strong> skills. I consider myself a quick learner who is always eager to explore new concepts and continuously refine my abilities.
              </p>
              <p>
                As I continue my learning journey, I aim to gain strong expertise in <strong>Data Science, Artificial Intelligence, and Machine Learning</strong>, with the ultimate ambition of building a successful career as an impactful Data Scientist.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Highlight Information Cards */}
          <div className="about-cards-grid">
            {aboutData.cards.map((card) => (
              <div key={card.id} className="info-card">
                <div className="info-card-icon">
                  {iconMap[card.icon] || <Sparkles size={22} />}
                </div>
                <div>
                  <span className="info-card-subtitle">{card.subtitle}</span>
                  <h3 className="info-card-title">{card.title}</h3>
                </div>
                <p className="info-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
