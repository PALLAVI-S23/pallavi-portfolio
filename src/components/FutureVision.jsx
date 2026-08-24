import React from 'react';
import { 
  BrainCircuit, 
  FolderKanban, 
  Search, 
  Lightbulb, 
  Briefcase, 
  GraduationCap, 
  Users, 
  RefreshCw, 
  HeartHandshake, 
  Quote, 
  Sparkles 
} from 'lucide-react';
import { futureVisionData } from '../data/portfolioData';

export default function FutureVision() {
  const iconMap = {
    BrainCircuit: <BrainCircuit size={20} />,
    FolderKanban: <FolderKanban size={20} />,
    Search: <Search size={20} />,
    Lightbulb: <Lightbulb size={20} />,
    Briefcase: <Briefcase size={20} />,
    GraduationCap: <GraduationCap size={20} />,
    Users: <Users size={20} />,
    RefreshCw: <RefreshCw size={20} />,
    HeartHandshake: <HeartHandshake size={20} />
  };

  return (
    <section id="vision" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Aspirational Horizons</span>
          </div>
          <h2 className="section-title">
            Future <span className="gradient-text">Vision</span>
          </h2>
          <p className="subheading-text">
            "{futureVisionData.overview}"
          </p>
        </div>

        <div className="future-vision-wrapper">
          {/* Engineering Philosophy Quote Card */}
          <div className="vision-quote-card">
            <div className="vision-quote-icon">
              <Quote size={36} />
            </div>
            <p className="vision-quote-text">
              "{futureVisionData.coreQuote}"
            </p>
          </div>

          {/* 9 Vision Points Grid */}
          <div className="vision-points-grid">
            {futureVisionData.points.map((pt) => (
              <div key={pt.id} className="vision-point-card">
                <div className="vision-point-icon">
                  {iconMap[pt.icon] || <Sparkles size={20} />}
                </div>
                <span className="vision-point-text">{pt.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
