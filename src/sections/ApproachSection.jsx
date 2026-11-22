import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="section">
      <div className="container">
        <SectionHeading
          tag={t.approach.sectionTag}
          title={t.approach.title}
          subtitle={t.approach.subtitle}
        />

        {/* Desktop Horizontal Workflow & Mobile Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            marginTop: '32px'
          }}
        >
          {/* Connecting line */}
          <div
            className="timeline-connector"
            style={{
              position: 'absolute',
              top: '28px',
              left: '20px',
              right: '20px',
              height: '2px',
              background: 'var(--border)',
              zIndex: 1
            }}
          />

          <div
            className="approach-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '24px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {t.approach.steps.map((item, index) => (
              <div
                key={item.step}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px 20px',
                  background: 'var(--bg-card)'
                }}
              >
                {/* Step indicator circle */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '16px'
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{'\n@media (max-width: 900px) {\n  .timeline-connector {\n    display: none !important;\n  }\n}\n'}</style>
    </section>
  );
};
