import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.about.sectionTag}
          title={t.about.title}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Editorial Narrative */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              fontSize: '1.025rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)'
            }}
          >
            <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {t.about.p1}
            </p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>

            {/* Mission / Goal Card */}
            <div
              style={{
                marginTop: '12px',
                padding: '20px 24px',
                background: 'var(--bg-card)',
                borderInlineStart: '4px solid var(--accent)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                borderInlineStartWidth: '4px'
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Target size={15} />
                <span>{t.about.goalLabel}</span>
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  margin: 0
                }}
              >
                "{t.about.goalText}"
              </p>
            </div>
          </div>

          {/* Right Column: Characteristics & Thought Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Thought Statement */}
            <div
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '28px'
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                "{t.about.quote}"
              </p>
            </div>

            {/* Characteristics Checklist */}
            <div
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '28px'
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '18px'
                }}
              >
                {t.about.characteristicsTitle}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: 0,
                  margin: 0
                }}
              >
                {t.about.characteristics.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
