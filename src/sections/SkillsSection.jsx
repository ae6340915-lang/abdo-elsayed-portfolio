import React from 'react';
import { Terminal, LineChart, Cpu, HardDrive, Wrench, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { getTechIcon } from '../components/TechIcons';

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
                gap: '20px'
              }}
            >
              {/* Category Header */}
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

              {/* Skills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
                  gap: '12px'
                }}
              >
                {cat.items.map((skill) => {
                  const techIcon = getTechIcon(skill, 30);
                  if (techIcon) {
                    return (
                      <div
                        key={skill}
                        className="tech-tile"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 6px',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-md)',
                          textAlign: 'center',
                          cursor: 'default',
                          transition: 'all var(--transition-normal)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                          {techIcon}
                        </div>
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)',
                            lineHeight: 1.2
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    );
                  }

                  // Non-tool conceptual skills (e.g. Classification, Feature Engineering)
                  return (
                    <div
                      key={skill}
                      className="tech-tile"
                      style={{
                        gridColumn: 'span 2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 12px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all var(--transition-normal)'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-tile:hover {
          border-color: var(--accent) !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.15);
        }
      `}</style>
    </section>
  );
};
