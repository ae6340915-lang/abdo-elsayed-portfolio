import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
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
          <div style={{ maxWidth: '580px' }}>
            {/* Status Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '20px',
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

            {/* Small Label */}
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {t.hero.label}
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '20px'
              }}
            >
              <span>{t.hero.headlineLine1}</span>
              <br />
              <span style={{ color: 'var(--accent)' }}>{t.hero.headlineLine2}</span>
              <br />
              <span>{t.hero.headlineLine3}</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '32px'
              }}
            >
              {t.hero.paragraph}
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
              >
                <span>{t.hero.exploreWork}</span>
                <ArrowDown size={16} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
              >
                <span>{t.hero.letsConnect}</span>
                <ArrowUpRight
                  size={16}
                  style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
                />
              </button>
            </div>
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
