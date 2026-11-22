import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const JourneySection = () => {
  const { t } = useLanguage();

  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHeading
          tag={t.journey.sectionTag}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {t.journey.areas.map((area, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--accent)'
                  }}
                >
                  TRACK 0{idx + 1}
                </span>
                <Sparkles size={16} style={{ color: 'var(--accent)' }} />
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                {area.title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
