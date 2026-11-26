import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'services', 'contact'];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const isScrolling = useRef(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const next = window.scrollY > 20;
        setIsScrolled((current) => (current === next ? current : next));
        frame = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrolling.current) setActiveSection(id);
        },
        { threshold: 0.18, rootMargin: '-72px 0px -42% 0px' }
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [location.pathname]);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact, isButton: true }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    isScrolling.current = true;
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { isScrolling.current = false; }, 900);
    };
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

  const renderLanguageSwitcher = (className = '') => (
    <div className={`lang-switcher ${className}`} role="group" aria-label={t.nav.switchLanguage}>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        className={lang === 'ar' ? 'active' : ''}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
      >
        AR
      </button>
    </div>
  );

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', gap: '16px' }}>
        <Link
          to="/"
          onClick={() => handleNavClick('hero')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          aria-label="Abdo Elsayed Home"
        >
          <span className="ae-monogram" aria-hidden="true">AE</span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}
          >
            Abdo Elsayed<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        <nav className="desktop-nav" style={{ alignItems: 'center', gap: '18px' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;
            if (link.isButton) {
              return (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="nav-connect-btn"
                >
                  <span>{t.nav.connect}</span>
                  <ArrowUpRight size={14} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
                </button>
              );
            }
            return (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="nav-link"
                aria-current={isActive ? 'location' : undefined}
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {link.label}
                {isActive && <span className="nav-link-indicator" />}
              </button>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button type="button" onClick={toggleTheme} className="icon-btn" title={t.nav.switchTheme} aria-label={t.nav.switchTheme} style={{ width: '36px', height: '36px' }}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {renderLanguageSwitcher('desktop-lang')}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn mobile-toggle"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            style={{ width: '36px', height: '36px' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="mobile-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;
            return (
            <button
              type="button"
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={link.isButton ? 'mobile-connect' : 'mobile-link'}
              aria-current={isActive ? 'location' : undefined}
              style={{ color: isActive || link.isButton ? 'var(--accent)' : 'var(--text-primary)', textAlign: isRtl ? 'right' : 'left' }}
            >
              {link.label}
            </button>
            );
          })}
          <div className="mobile-lang-row">
            <span className="mono-label">{t.nav.language}</span>
            {renderLanguageSwitcher()}
          </div>
        </div>
      )}

      <style>{`
        .lang-switcher {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 5px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          background: var(--bg-card);
        }
        .lang-switcher button {
          padding: 3px 7px;
          border: none;
          border-radius: var(--radius-full);
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .lang-switcher button:hover { color: var(--accent); }
        .lang-switcher button.active {
          background: var(--accent);
          color: var(--btn-primary-text);
        }
        .lang-switcher > span {
          color: var(--border-hover);
          font-size: 0.7rem;
          line-height: 1;
        }
        .mobile-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 8px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }
        .ae-monogram {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: -0.06em;
          box-shadow: inset 0 0 0 1px rgba(var(--accent-rgb), 0.08);
        }
        .nav-link {
          position: relative;
          background: none;
          border: none;
          padding: 6px 0;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.88rem;
          transition: color var(--transition-fast);
        }
        .nav-link:hover { color: var(--accent) !important; }
        .nav-link-indicator {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          border-radius: 2px;
          background: var(--accent);
        }
        .nav-connect-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--accent);
          background: transparent;
          color: var(--accent);
          font-weight: 600;
          font-size: 0.84rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .nav-connect-btn:hover {
          background: var(--accent);
          color: var(--btn-primary-text);
          box-shadow: var(--shadow-accent);
        }
        .mobile-menu {
          position: absolute;
          top: 72px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 20px 24px 26px;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: var(--shadow-lg);
        }
        .mobile-link, .mobile-connect {
          background: none;
          border: none;
          text-align: left;
          padding: 10px 0;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }
        .mobile-connect {
          border: 1px solid var(--accent);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          margin-top: 6px;
        }
        @media (min-width: 980px) {
          .desktop-nav { display: flex !important; }
          .desktop-lang { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 979px) {
          .desktop-nav { display: none !important; }
          .desktop-lang { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
