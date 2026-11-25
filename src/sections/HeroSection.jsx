import React from 'react';
import { ArrowDown, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroNetworkVisual } from '../components/DataVisuals';

export const HeroSection = () => {
  const { t, isRtl } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Brand & Copy */}
          <div style={{ maxWidth: '600px' }}>

            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span className="status-dot-pulse" />
              <span
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                {t.hero.statusBadge}
              </span>
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {t.hero.label}
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '10px'
              }}
            >
              {t.hero.name}
            </h1>

            {/* Professional Title */}
            <div
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em'
              }}
            >
              {t.hero.title}
            </div>

            {/* University / Location Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                <GraduationCap size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {t.hero.university}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                <MapPin size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {isRtl ? 'الزقازيق، مصر' : 'Zagazig, Egypt'}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '540px'
              }}
            >
              {t.hero.paragraph}
            </p>

            {/* Skill Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '36px'
              }}
            >
              {t.hero.skills && t.hero.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.03em',
                    transition: 'border-color 0.2s, color 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Single CTA Button */}
            <button
              onClick={() => scrollTo('projects')}
              className="btn btn-primary"
            >
              <span>{t.hero.exploreWork}</span>
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Right Column: Custom Data Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '420px',
              height: '100%'
            }}
          >
            <HeroNetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
