import React from 'react';
import { GraduationCap, Database, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';

const TopicList = ({ items }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
    {items.map((item) => (
      <span key={item} className="tag" style={{ fontSize: '0.78rem' }}>
        {item}
      </span>
    ))}
  </div>
);

export const EducationSection = () => {
  const { t } = useLanguage();
  const data = t.education;

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading tag={data.sectionTag} title={data.title} subtitle={data.subtitle} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px'
          }}
        >
          <div className="card reveal" style={{ padding: '28px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}
            >
              <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <span className="badge" style={{ marginBottom: '12px' }}>{data.educationTitle}</span>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{data.faculty}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '4px' }}>
              {data.department}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{data.university}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '14px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              <span>{data.location}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '10px' }}>
              {data.degreeStatus}
            </p>
          </div>

          <div className="card reveal" style={{ padding: '28px', animationDelay: '0.08s' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}
            >
              <Database size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{data.focusTitle}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {data.focusDesc}
            </p>
            <TopicList items={data.focusTopics} />
          </div>

          <div className="card reveal" style={{ padding: '28px', animationDelay: '0.16s' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}
            >
              <Award size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{data.trainingTitle}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {data.trainingDesc}
            </p>
            <TopicList items={data.training} />
          </div>
        </div>
      </div>
    </section>
  );
};
