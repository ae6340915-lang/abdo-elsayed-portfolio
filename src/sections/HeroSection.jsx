import React from 'react';
import { ArrowDown, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { HeroNetworkVisual } from '../components/DataVisuals';
import { Github } from '../components/SocialIcons';
import { profileConfig } from '../data/profileData';
import { contactConfig } from '../data/contactData';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '132px',
        paddingBottom: '88px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'radial-gradient(circle at 0% 0%, var(--accent-glow) 0%, transparent 36%), radial-gradient(circle at 100% 100%, var(--accent-glow) 0%, transparent 34%)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
          backgroundSize: '38px 38px',
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div className="animate-fade-in-up" style={{ maxWidth: '660px' }}>
            <span className="section-tag hero-greeting" style={{ marginBottom: '22px' }}>{t.hero.label}</span>

            <h1 className="display-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', marginBottom: '18px' }}>
              <span style={{ display: 'block' }}>{t.hero.headlineLine1}</span>
              <span className="text-sweep" style={{ display: 'block' }}>{t.hero.headlineLine2}</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                color: 'var(--accent)',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.5,
                marginBottom: '18px'
              }}
            >
              {t.hero.title}
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '580px', marginBottom: '26px' }}>
              {t.hero.paragraph}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
              {t.hero.tags.map((tag) => (
                <span key={tag} className="badge" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <GraduationCap size={15} style={{ color: 'var(--accent)' }} />
                {t.hero.university}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <MapPin size={15} style={{ color: 'var(--accent)' }} />
                {profileConfig.location}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button type="button" onClick={() => scrollTo('projects')} className="btn btn-primary">
                <span>{t.hero.exploreWork}</span>
                <ArrowDown size={16} />
              </button>
              <button type="button" onClick={() => scrollTo('contact')} className="btn btn-secondary">
                <span>{t.hero.letsConnect}</span>
                <ArrowUpRight size={15} />
              </button>
              <a
                href={contactConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github size={16} />
                <span>{t.hero.viewGithub}</span>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', minHeight: '440px', height: '100%' }}>
            <HeroNetworkVisual />
          </div>
        </div>
      </div>

      <style>{`
        .hero-greeting {
          font-size: clamp(0.95rem, 4.4vw, 1.55rem);
          white-space: nowrap;
          letter-spacing: 0.16em;
          font-family: var(--font-mono);
          color: var(--accent);
          line-height: 1.2;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 420px) {
          .hero-greeting {
            gap: 0;
            font-size: clamp(0.95rem, 4.2vw, 1rem);
          }
          .hero-greeting::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
