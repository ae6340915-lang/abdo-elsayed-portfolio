import React from 'react';
import {
  Target,
  Brain,
  BookOpen,
  Compass,
  Users,
  Clock,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const SoftSkillsSection = () => {
  const { t, isRtl } = useLanguage();

  const getSkillIcon = (id) => {
    const iconProps = { size: 20, strokeWidth: 2 };
    switch (id) {
      case 'problem-solving':
        return <Target {...iconProps} />;
      case 'analytical-thinking':
        return <Brain {...iconProps} />;
      case 'continuous-learning':
        return <BookOpen {...iconProps} />;
      case 'adaptability':
        return <Compass {...iconProps} />;
      case 'teamwork':
        return <Users {...iconProps} />;
      case 'time-management':
        return <Clock {...iconProps} />;
      case 'attention-to-detail':
        return <CheckCircle2 {...iconProps} />;
      case 'communication':
        return <MessageSquare {...iconProps} />;
      default:
        return <Target {...iconProps} />;
    }
  };

  return (
    <section id="soft-skills" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.softSkills.sectionTag}
          title={t.softSkills.title}
          subtitle={t.softSkills.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {t.softSkills.items.map((skill, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={skill.id}
                className="card soft-skill-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '24px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Header Row: Icon Badge + Index Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <div
                    className="skill-icon-wrapper"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--badge-bg)',
                      border: '1px solid var(--badge-border)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {getSkillIcon(skill.id)}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      opacity: 0.5,
                      letterSpacing: '0.08em'
                    }}
                  >
                    {formattedIndex}
                  </span>
                </div>

                {/* Skill Title */}
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    margin: 0
                  }}
                >
                  {skill.title}
                </h3>

                {/* Skill Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {skill.description}
                </p>

                {/* Subtle Hover Ambient Accent Indicator */}
                <div
                  className="card-bottom-accent"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0,
                    transition: 'opacity var(--transition-normal)'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .soft-skill-card {
          cursor: default;
        }

        .soft-skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
          box-shadow: 0 10px 24px -6px rgba(var(--accent-rgb), 0.16), var(--shadow-md);
        }

        .soft-skill-card:hover .skill-icon-wrapper {
          background-color: var(--accent);
          color: #0A0F17;
          border-color: var(--accent);
          transform: scale(1.05);
        }

        .soft-skill-card:hover .card-bottom-accent {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
