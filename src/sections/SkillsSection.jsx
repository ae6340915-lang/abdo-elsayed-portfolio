import React from 'react';
import { Terminal, LineChart, Cpu, HardDrive, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const SkillsSection = () => {
  const { t } = useLanguage();

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Terminal size={20} style={{ color: 'var(--accent)' }} />;
      case 'visualization':
        return <LineChart size={20} style={{ color: 'var(--accent)' }} />;
      case 'ml':
        return <Cpu size={20} style={{ color: 'var(--accent)' }} />;
      case 'bigdata':
        return <HardDrive size={20} style={{ color: 'var(--accent)' }} />;
      case 'tools':
        return <Wrench size={20} style={{ color: 'var(--accent)' }} />;
      default:
        return <Terminal size={20} style={{ color: 'var(--accent)' }} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.skills.sectionTag}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {t.skills.categories.map((cat) => (
            <div
              key={cat.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {getCategoryIcon(cat.id)}
                </div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'border-color var(--transition-fast)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
