import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { freelancePlatforms } from '../data/freelanceData';
import { getFreelanceIcon } from '../components/FreelanceIcons';

export const FreelanceSection = () => {
  const { lang, t, isRtl } = useLanguage();

  return (
    <section id="freelance" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.freelance.sectionTag}
          title={t.freelance.title}
          subtitle={t.freelance.subtitle}
        />

        <div
          className="freelance-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '22px'
          }}
        >
          {freelancePlatforms.map((platform) => {
            const info = t.freelance.platforms[platform.id];

            return (
              <div
                key={platform.id}
                className="card freelance-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '26px 22px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--transition-normal)',
                  '--platform-color': platform.brandColor,
                  '--platform-bg': platform.brandBg,
                  '--platform-border': platform.brandBorder
                }}
              >
                {/* Top Subtle Brand Highlight Line */}
                <div
                  className="freelance-card-top-line"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${platform.brandColor}, transparent)`,
                    opacity: 0,
                    transition: 'opacity var(--transition-normal)'
                  }}
                />

                {/* Card Header: Icon & Category Badge */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px'
                    }}
                  >
                    <div
                      className="freelance-icon-box"
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        background: platform.brandBg,
                        border: `1px solid ${platform.brandBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform var(--transition-fast)'
                      }}
                    >
                      {getFreelanceIcon(platform.id, 26)}
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 9px',
                        borderRadius: 'var(--radius-full)',
                        background: platform.brandBg,
                        border: `1px solid ${platform.brandBorder}`,
                        color: platform.badgeColor,
                        letterSpacing: '0.04em'
                      }}
                    >
                      {info.role}
                    </span>
                  </div>

                  {/* Platform Title */}
                  <div style={{ marginBottom: '10px' }}>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                        lineHeight: 1.2
                      }}
                    >
                      {info.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        opacity: 0.65
                      }}
                    >
                      {info.subName}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                      marginBottom: '20px'
                    }}
                  >
                    {info.description}
                  </p>
                </div>

                {/* Visit Profile Action Button */}
                <div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm freelance-btn"
                    style={{
                      width: '100%',
                      gap: '8px',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-md)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span>{t.freelance.visitProfile}</span>
                    <ExternalLink size={14} style={{ flexShrink: 0 }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 1080px) {
          .freelance-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        .freelance-card:hover {
          transform: translateY(-5px);
          border-color: var(--platform-border) !important;
          box-shadow: 0 12px 28px -6px var(--platform-bg), var(--shadow-md);
        }

        .freelance-card:hover .freelance-card-top-line {
          opacity: 1;
        }

        .freelance-card:hover .freelance-icon-box {
          transform: scale(1.06);
        }

        .freelance-card:hover .freelance-btn {
          background-color: var(--platform-bg) !important;
          border-color: var(--platform-border) !important;
          color: var(--platform-color) !important;
        }
      `}</style>
    </section>
  );
};
