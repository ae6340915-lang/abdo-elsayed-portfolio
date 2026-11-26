import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { useLanguage } from '../hooks/useLanguage';
import { contactConfig } from '../data/contactData';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'contact', label: t.nav.contact }
  ];

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}
            >
              Abdo Elsayed<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '10px' }}>
              {t.footer.title}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '12px' }}>
              {t.nav.menu}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px' }}>
              {links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '12px' }}>
              {t.contact.connect}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={contactConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: 'space-between' }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Github size={16} style={{ color: 'var(--accent)' }} />
                  <span>{t.contact.githubLabel}</span>
                </span>
                <ExternalLink size={13} style={{ color: 'var(--text-muted)' }} />
              </a>
              <a
                href={contactConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ justifyContent: 'space-between' }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Linkedin size={16} style={{ color: 'var(--accent)' }} />
                  <span>{t.contact.linkedinLabel}</span>
                </span>
                <ExternalLink size={13} style={{ color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>
        </div>

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
            type="button"
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
