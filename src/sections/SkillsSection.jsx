import React from 'react';
import { Terminal, LineChart, Cpu, Database, HardDrive, Wrench } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { TechIcon } from '../components/TechIcons';

export const SkillsSection = () => {
  const { t } = useLanguage();

  const getCategoryIcon = (id) => {
    const iconStyle = { color: 'var(--accent)' };
    switch (id) {
      case 'programming':
        return <Terminal size={20} style={iconStyle} />;
      case 'data-analysis':
        return <LineChart size={20} style={iconStyle} />;
      case 'ml':
        return <Cpu size={20} style={iconStyle} />;
      case 'databases':
        return <Database size={20} style={iconStyle} />;
      case 'bigdata':
        return <HardDrive size={20} style={iconStyle} />;
      case 'tools':
        return <Wrench size={20} style={iconStyle} />;
      default:
        return <Terminal size={20} style={iconStyle} />;
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px'
          }}
        >
          {t.skills.categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transitionDelay: `${categoryIndex * 0.07}s`
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
                  {getCategoryIcon(category.id)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
                  gap: '12px'
                }}
              >
                {category.items.map((skill) => (
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
                      transition: 'border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '32px' }}>
                      <TechIcon name={skill} size={30} />
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-tile:hover {
          border-color: rgba(var(--accent-rgb), 0.6) !important;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.14);
          background: var(--bg-card-hover) !important;
        }
        .tech-tile:hover span {
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
};
