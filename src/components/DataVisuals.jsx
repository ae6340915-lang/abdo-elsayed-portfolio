import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Hero Network Visual: Interactive Canvas with interconnected nodes, signal pulses, and coordinate lines
export const HeroNetworkVisual = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const { lang, isRtl } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const isLight = theme === 'light';
    const accentRgb = isLight ? '2, 132, 199' : '66, 182, 232';
    const accentHex = isLight ? '#0284C7' : '#42B6E8';

    const nodeCount = Math.min(32, Math.floor((width * height) / 6500) + 12);
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 2,
        pulse: Math.random() * Math.PI * 2,
        isHub: i % 5 === 0
      });
    }

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Subtle coordinate background grid
      ctx.strokeStyle = `rgba(${accentRgb}, ${isLight ? '0.04' : '0.06'})`;
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 125;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.28 : 0.35);
            ctx.strokeStyle = `rgba(${accentRgb}, ${alpha})`;
            ctx.lineWidth = nodes[i].isHub || nodes[j].isHub ? 1.4 : 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Flowing data packets along edges
            if ((i + j) % 4 === 0) {
              const tProgress = (time * 0.45 + (i * 0.18)) % 1;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * tProgress;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * tProgress;
              ctx.fillStyle = `rgba(${accentRgb}, ${isLight ? '0.9' : '0.85'})`;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        const mdx = mousePos.x - node.x;
        const mdy = mousePos.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          node.x += (mdx / mdist) * 0.6;
          node.y += (mdy / mdist) * 0.6;
        }

        const glow = Math.sin(time * 2 + node.pulse) * 0.5 + 0.5;
        ctx.fillStyle = node.isHub ? accentHex : (isLight ? 'rgba(71, 85, 105, 0.75)' : 'rgba(156, 170, 184, 0.85)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.isHub ? node.radius + 1.2 : node.radius, 0, Math.PI * 2);
        ctx.fill();

        if (node.isHub) {
          ctx.strokeStyle = `rgba(${accentRgb}, ${0.25 + glow * 0.35})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.6 + glow * 4, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, theme]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '380px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        background: 'var(--hero-visual-bg)',
        overflow: 'hidden'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          insetInlineStart: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-mono)',
          fontWeight: 600,
          color: 'var(--text-secondary)'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
        <span>{lang === 'ar' ? 'الهيكل البياني: رسم الخصائص متعدد الأبعاد' : 'TOPOLOGY: MULTI-VARIATE FEATURE GRAPH'}</span>
      </div>
    </div>
  );
};

// Project 1 Visual: Sensor Waveform & Spectral Diagnostics
export const MotorSensorVisual = () => (
  <svg viewBox="0 0 400 210" width="100%" height="100%" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="motorGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
        <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.95" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    <line x1="20" y1="40" x2="380" y2="40" stroke="var(--border)" strokeDasharray="3 3" />
    <line x1="20" y1="80" x2="380" y2="80" stroke="var(--border)" strokeDasharray="3 3" />
    <line x1="20" y1="120" x2="380" y2="120" stroke="var(--border)" strokeDasharray="3 3" />
    <line x1="20" y1="160" x2="380" y2="160" stroke="var(--border)" strokeDasharray="3 3" />

    <path
      d="M20,120 Q50,110 80,120 T140,120 T200,90 T260,150 T320,110 T380,120"
      fill="none"
      stroke="var(--text-muted)"
      strokeWidth="1.2"
      strokeDasharray="4 4"
    />
    <path
      d="M20,130 C45,130 55,60 75,60 C95,60 105,170 125,170 C145,170 155,75 175,75 C195,75 205,185 225,185 C245,185 255,45 275,45 C295,45 305,150 325,150 C345,150 355,100 380,120"
      fill="none"
      stroke="url(#motorGrad)"
      strokeWidth="2.4"
    />
    <path
      d="M20,130 C45,130 55,60 75,60 C95,60 105,170 125,170 C145,170 155,75 175,75 C195,75 205,185 225,185 C245,185 255,45 275,45 C295,45 305,150 325,150 C345,150 355,100 380,120 L380,200 L20,200 Z"
      fill="url(#areaFill)"
    />
    <circle cx="75" cy="60" r="4" fill="var(--accent)" />
    <circle cx="275" cy="45" r="5" fill="var(--accent)" stroke="var(--bg-primary)" strokeWidth="2" />
    <text x="285" y="42" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)">FAULT PEAK [CH-04]</text>
    <rect x="25" y="16" width="115" height="22" rx="4" fill="var(--bg-card)" stroke="var(--border)" />
    <text x="35" y="31" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)">SAMPLING: 10kHz</text>
  </svg>
);

// Project 2 Visual: Dry Bean Morphological Geometries & Feature Ellipses
export const BeanMorphologyVisual = () => (
  <svg viewBox="0 0 400 210" width="100%" height="100%" style={{ display: 'block' }}>
    <line x1="50" y1="175" x2="360" y2="175" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="50" y1="30" x2="50" y2="175" stroke="var(--border)" strokeWidth="1.5" />
    <text x="315" y="195" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">Aspect Ratio</text>
    <text x="18" y="38" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">Roundness</text>

    {/* Bean 1 (Seker) */}
    <path
      d="M110,130 C90,105 105,75 130,85 C155,95 160,125 140,140 C125,150 115,145 110,130 Z"
      fill="rgba(var(--accent-rgb), 0.12)"
      stroke="var(--accent)"
      strokeWidth="1.8"
    />
    <circle cx="128" cy="112" r="3" fill="var(--accent)" />
    <text x="100" y="68" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)">Seker Cluster</text>

    {/* Bean 2 (Horoz) */}
    <path
      d="M240,120 C220,80 260,50 300,75 C340,100 320,150 280,145 C255,140 245,135 240,120 Z"
      fill="rgba(16, 185, 129, 0.12)"
      stroke="#10B981"
      strokeWidth="1.8"
      strokeDasharray="4 2"
    />
    <circle cx="280" cy="108" r="3" fill="#10B981" />
    <text x="260" y="46" fill="var(--text-secondary)" fontSize="10" fontFamily="var(--font-mono)">Horoz Cluster</text>

    {/* Scatter points */}
    <circle cx="115" cy="120" r="2.5" fill="var(--accent)" opacity="0.8" />
    <circle cx="125" cy="105" r="2.5" fill="var(--accent)" opacity="0.8" />
    <circle cx="138" cy="118" r="2.5" fill="var(--accent)" opacity="0.8" />
    <circle cx="145" cy="128" r="2.5" fill="var(--accent)" opacity="0.8" />
    <circle cx="270" cy="95" r="2.5" fill="#10B981" opacity="0.8" />
    <circle cx="290" cy="115" r="2.5" fill="#10B981" opacity="0.8" />
    <circle cx="260" cy="110" r="2.5" fill="#10B981" opacity="0.8" />
    <circle cx="305" cy="90" r="2.5" fill="#10B981" opacity="0.8" />

    {/* Decision boundary */}
    <line x1="180" y1="40" x2="210" y2="175" stroke="var(--text-primary)" strokeWidth="1.5" />
    <text x="195" y="32" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-mono)">SVC BOUNDARY</text>
  </svg>
);

// Project 3 Visual: Online Food Ordering Customer Conversion Funnel & Logistic Curve
export const FoodOrderFunnelVisual = () => (
  <svg viewBox="0 0 400 210" width="100%" height="100%" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="sigGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
        <stop offset="60%" stopColor="var(--accent)" stopOpacity="1" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
      </linearGradient>
    </defs>
    <line x1="50" y1="175" x2="360" y2="175" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="50" y1="30" x2="50" y2="175" stroke="var(--border)" strokeWidth="1.5" />

    <text x="300" y="195" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">Log-Odds Score (z)</text>
    <text x="16" y="38" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">P(Reorder = 1)</text>

    <line x1="50" y1="102" x2="360" y2="102" stroke="var(--border)" strokeDasharray="4 4" />
    <text x="60" y="97" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">THRESHOLD p = 0.50</text>

    <path
      d="M50,170 C140,169 170,160 200,102 C230,45 260,36 360,35"
      fill="none"
      stroke="url(#sigGrad)"
      strokeWidth="2.8"
    />

    <circle cx="80" cy="168" r="3" fill="var(--text-muted)" />
    <circle cx="110" cy="170" r="3" fill="var(--text-muted)" />
    <circle cx="130" cy="166" r="3" fill="var(--text-muted)" />
    <circle cx="240" cy="40" r="3.5" fill="#10B981" />
    <circle cx="270" cy="38" r="3.5" fill="#10B981" />
    <circle cx="300" cy="36" r="3.5" fill="#10B981" />

    <rect x="235" y="122" width="130" height="42" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
    <text x="245" y="139" fill="var(--text-primary)" fontSize="10" fontFamily="var(--font-mono)">+1.42 Satisfaction</text>
    <text x="245" y="154" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)">+0.85 Income Tier</text>
  </svg>
);

// Project 4 Visual: MENA Atmospheric Contour & PM2.5 Dispersion Map
export const AirQualityMapVisual = () => (
  <svg viewBox="0 0 400 210" width="100%" height="100%" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="heatGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
        <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.25" />
        <stop offset="80%" stopColor="#EF4444" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <line x1="30" y1="60" x2="370" y2="60" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="2 4" />
    <line x1="30" y1="110" x2="370" y2="110" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="2 4" />
    <line x1="30" y1="160" x2="370" y2="160" stroke="var(--border)" strokeWidth="0.8" strokeDasharray="2 4" />

    <path
      d="M50,145 Q90,135 130,125 Q170,135 210,115 Q250,85 280,95 Q320,105 350,135 Q310,165 250,170 Q180,180 100,165 Z"
      fill="url(#heatGrad)"
      stroke="var(--border-hover)"
      strokeWidth="1.5"
    />

    <path
      d="M80,140 Q140,125 200,120 Q260,110 310,125"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="1.4"
      strokeDasharray="4 2"
    />
    <path
      d="M120,150 Q180,140 230,135 Q280,130 300,140"
      fill="none"
      stroke="#EF4444"
      strokeWidth="1.6"
    />

    <circle cx="160" cy="130" r="4" fill="var(--accent)" stroke="var(--bg-primary)" strokeWidth="1.5" />
    <circle cx="240" cy="115" r="4.5" fill="#EF4444" stroke="var(--bg-primary)" strokeWidth="1.5" />
    <circle cx="280" cy="135" r="4" fill="#F59E0B" stroke="var(--bg-primary)" strokeWidth="1.5" />

    <rect x="25" y="172" width="165" height="26" rx="4" fill="var(--bg-card)" stroke="var(--border)" />
    <circle cx="38" cy="185" r="4" fill="#EF4444" />
    <text x="48" y="189" fill="var(--text-secondary)" fontSize="9.5" fontFamily="var(--font-mono)">PM2.5 &gt; 35 μg/m³ (WHO EXCEED)</text>
  </svg>
);

export const ProjectVisual = ({ type }) => {
  switch (type) {
    case 'motor':
      return <MotorSensorVisual />;
    case 'bean':
      return <BeanMorphologyVisual />;
    case 'food':
      return <FoodOrderFunnelVisual />;
    case 'air':
      return <AirQualityMapVisual />;
    default:
      return <MotorSensorVisual />;
  }
};
