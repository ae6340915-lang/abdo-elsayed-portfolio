import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { profileConfig } from '../data/profileData';

export const Footer = () => {
  const { lang, t, isRtl } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        paddingBlock: '64px 32px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}
            >
              Abdo Elsayed<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '10px'
              }}
            >
              {lang === 'ar' ? profileConfig.titleAr : profileConfig.titleEn}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}
            >
              {lang === 'ar' ? profileConfig.taglineAr : profileConfig.taglineEn}
            </p>
          </div>

          {/* Availability Status */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '12px'
              }}
            >
              Status
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <span className="status-dot-pulse" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {lang === 'ar' ? profileConfig.availabilityAr : profileConfig.availabilityEn}
              </span>
            </div>
          </div>

          {/* Connect & Socials */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '12px'
              }}
            >
              {t.contact.socialsLabel}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={profileConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={profileConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={'mailto:' + profileConfig.email}
                className="icon-btn"
                aria-label="Direct Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={profileConfig.phoneTel}
                className="icon-btn"
                aria-label="Direct Phone Call"
                title={profileConfig.phoneFormatted}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {currentYear} Abdo Elsayed. {t.footer.allRightsReserved}
          </div>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ gap: '6px' }}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
