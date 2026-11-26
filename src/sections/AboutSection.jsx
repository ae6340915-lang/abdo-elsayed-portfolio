import React from 'react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';

export const AboutSection = () => {
  const { t } = useLanguage();
  const data = t.about;

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading tag={data.sectionTag} title={data.title} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '44px',
            alignItems: 'start'
          }}
        >
          <div
            className="reveal-left"
            style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '1rem', lineHeight: 1.8 }}
          >
            <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>{data.quote}</p>
            <p>{data.p1}</p>
            <p>{data.p2}</p>
            <p>{data.p3}</p>
            <p>{data.p4}</p>

            <div
              className="glass-card"
              style={{ padding: '22px 24px', borderInlineStart: '3px solid var(--accent)', borderRadius: 'var(--radius-md)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', marginBottom: '8px' }}>
                <Target size={16} />
                <span className="mono-label" style={{ color: 'var(--accent)' }}>{data.howIWorkTitle}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{data.howIWork}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                <span>{data.goalLabel}</span>
                <ArrowRight size={14} />
              </div>
              <p style={{ margin: '4px 0 0', color: 'var(--text-primary)', fontWeight: 600 }}>{data.goalText}</p>
            </div>
          </div>

          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ padding: '30px' }}>
              <span className="section-tag" style={{ marginBottom: '16px' }}>{data.characteristicsTitle}</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {data.characteristics.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '30px',
                background: 'var(--bg-primary)',
                minHeight: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', lineHeight: 0.9, color: 'var(--accent)' }}>“</span>
              <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}>
                {data.quote}
              </p>
              <span className="mono-label" style={{ marginTop: '18px' }}>ABDO ELSAYED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
