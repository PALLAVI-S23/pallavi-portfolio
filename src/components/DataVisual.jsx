import React, { useState, useEffect } from 'react';
import { Database, Cpu, Activity, Sparkles, Terminal, BarChart2 } from 'lucide-react';

export default function DataVisual() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 50, y: 50, label: "Data Input", type: "input" },
    { x: 130, y: 30, label: "Cleaning", type: "process" },
    { x: 130, y: 90, label: "Feature Eng", type: "process" },
    { x: 210, y: 40, label: "ML Model", type: "model" },
    { x: 210, y: 100, label: "Algorithms", type: "model" },
    { x: 280, y: 70, label: "Insights", type: "output" },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
  ];

  return (
    <div className="data-visual-wrapper">
      <div className="data-visual-card">
        {/* Terminal Header */}
        <div className="visual-header">
          <div className="visual-dots">
            <div className="visual-dot dot-red"></div>
            <div className="visual-dot dot-yellow"></div>
            <div className="visual-dot dot-green"></div>
          </div>
          <div className="visual-title">
            <span>pallavi_data_pipeline.ai</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span className="badge badge-foundation" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
              ONLINE
            </span>
          </div>
        </div>

        {/* Dynamic Interactive SVG Network */}
        <div className="network-canvas-container">
          <svg viewBox="0 0 330 140" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Lines */}
            {connections.map((conn, idx) => {
              const start = nodes[conn.from];
              const end = nodes[conn.to];
              const isHighlighted = activeNode === conn.from || activeNode === conn.to;
              return (
                <line
                  key={idx}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={isHighlighted ? "url(#lineGrad)" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth={isHighlighted ? "2" : "1.2"}
                  strokeDasharray={isHighlighted ? "4 2" : "none"}
                  style={{ transition: 'all 0.5s ease' }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, idx) => {
              const isActive = activeNode === idx;
              return (
                <g key={idx} transform={`translate(${node.x}, ${node.y})`}>
                  {/* Outer Pulsing Ring */}
                  {isActive && (
                    <circle
                      r="12"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      opacity="0.7"
                      filter="url(#glow)"
                      style={{
                        animation: 'pulseDot 1.5s infinite ease-out'
                      }}
                    />
                  )}
                  {/* Inner Node Circle */}
                  <circle
                    r={isActive ? "7" : "5"}
                    fill={
                      node.type === 'output' 
                        ? '#34d399' 
                        : node.type === 'model'
                        ? '#6366f1'
                        : '#38bdf8'
                    }
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  {/* Small Label */}
                  <text
                    x="0"
                    y="18"
                    textAnchor="middle"
                    fill={isActive ? "#f8fafc" : "#64748b"}
                    fontSize="7.5"
                    fontFamily="JetBrains Mono"
                    fontWeight={isActive ? "700" : "500"}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Code Snippet Chip */}
        <div className="code-chip-badge">
          <div>
            <span className="code-keyword">SELECT </span>
            <span className="code-func">insights, value </span>
            <span className="code-keyword">FROM </span>
            <span className="code-string">real_world_data</span>
          </div>
          <Sparkles size={14} color="#38bdf8" />
        </div>

        {/* Floating Metrics Cards */}
        <div className="floating-metrics-row">
          <div className="metric-box">
            <div className="metric-icon-wrap">
              <Database size={18} />
            </div>
            <div className="metric-meta">
              <span className="metric-value">MySQL & Python</span>
              <span className="metric-label">Core Foundation</span>
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-icon-wrap" style={{ background: 'rgba(52, 211, 153, 0.12)', color: '#34d399' }}>
              <Activity size={18} />
            </div>
            <div className="metric-meta">
              <span className="metric-value">IoT & AI Systems</span>
              <span className="metric-label">Practical Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
