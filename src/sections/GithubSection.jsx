import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '../components/SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { profileConfig } from '../data/profileData';

export const GithubSection = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="github"
      style={{
        paddingBlock: '64px',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span className="badge" style={{ marginBottom: '14px' }}>
            {t.github.sectionTag}
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}
          >
            {t.github.title}
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              lineHeight: 1.65,
              marginBottom: '28px'
            }}
          >
            {t.github.description}
          </p>

          <a
            href={profileConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ gap: '10px' }}
          >
            <Github size={18} />
            <span>{t.github.button}</span>
            <ArrowUpRight
              size={15}
              style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
