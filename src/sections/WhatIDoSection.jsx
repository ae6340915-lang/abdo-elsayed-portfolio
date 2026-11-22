import React from 'react';
import { BarChart3, Database, Cpu, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

export const WhatIDoSection = () => {
  const { t } = useLanguage();

  const getIcon = (id) => {
    switch (id) {
      case 'analysis':
        return <BarChart3 size={24} style={{ color: 'var(--accent)' }} />;
      case 'preparation':
        return <Database size={24} style={{ color: 'var(--accent)' }} />;
      case 'ml':
        return <Cpu size={24} style={{ color: 'var(--accent)' }} />;
      case 'evaluation':
        return <CheckCircle size={24} style={{ color: 'var(--accent)' }} />;
      default:
        return <BarChart3 size={24} style={{ color: 'var(--accent)' }} />;
    }
  };

  return (
    <section id="what-i-do" className="section">
      <div className="container">
        <SectionHeading
          tag={t.whatIDo.sectionTag}
          title={t.whatIDo.title}
          subtitle={t.whatIDo.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {t.whatIDo.cards.map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {getIcon(card.id)}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
