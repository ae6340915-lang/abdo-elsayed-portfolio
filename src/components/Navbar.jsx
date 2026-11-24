import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin } from './SocialIcons';
import { profileConfig } from '../data/profileData';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    // 1. تم إضافة 'services' هنا
    const sections = ['hero', 'about', 'skills', 'soft-skills', 'projects', 'services', 'certificates', 'journey', 'contact', 'freelance'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (id === 'soft-skills') {
              setActiveSection('skills');
            } else if (id === 'freelance') {
              setActiveSection('contact');
            } else {
              setActiveSection(id);
            }
          }
        },
        { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    // 2. تم إضافة قسم الخدمات هنا
    { id: 'services', label: t.nav.services || 'Services' },
    { id: 'certificates', label: t.nav.certificates },
    { id: 'journey', label: t.nav.journey },
    { id: 'contact', label: t.nav.contact, isButton: true }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          gap: '16px'
        }}
      >
        {/* Brand Personal Logo from public/logo.png */}
        <Link
          to="/"
          onClick={() => handleNavClick('hero')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
          aria-label="Abdo Elsayed Home"
        >
          <img
            src="/logo.png"
            alt="Abdo Elsayed Logo"
            style={{
              width: '38px',
              height: '38px',
              objectFit: 'cover',
              borderRadius: '9px',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              display: 'inline-block'
            }}
          >
            Abdo Elsayed<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            alignItems: 'center',
            gap: '22px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;

            if (link.isButton) {
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="nav-contact-btn"
                  style={{
                    background: isActive ? 'var(--badge-bg)' : 'transparent',
                    border: '1.5px solid var(--accent)',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    padding: '7px 16px',
                    borderRadius: 'var(--radius-full)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isActive ? 'var(--badge-bg)' : 'transparent';
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {link.label}
                </button>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Toolbar: Social Contact Icons + Language Switcher + Theme Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Top Navbar Contact Icons (GitHub, LinkedIn, Email) */}
          <div className="nav-socials" style={{ alignItems: 'center', gap: '6px' }}>
            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              style={{ width: '34px', height: '34px' }}
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={profileConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              style={{ width: '34px', height: '34px' }}
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={'mailto:' + profileConfig.email}
              className="icon-btn"
              style={{ width: '34px', height: '34px' }}
              title="Send Email"
              aria-label="Send Direct Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <span className="nav-divider" style={{ width: '1px', height: '22px', backgroundColor: 'var(--border)', marginInline: '4px' }} />

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="icon-btn"
            style={{ width: 'auto', paddingInline: '10px', height: '36px', gap: '5px', fontSize: '0.8rem', fontWeight: 600 }}
            title={t.nav.switchLang}
            aria-label={t.nav.switchLang}
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="icon-btn"
            style={{ width: '36px', height: '36px' }}
            title={t.nav.switchTheme}
            aria-label={t.nav.switchTheme}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn mobile-toggle"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            style={{ width: '36px', height: '36px' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: link.isButton ? 'var(--badge-bg)' : 'none',
                border: link.isButton ? '1px solid var(--accent)' : 'none',
                borderRadius: link.isButton ? 'var(--radius-md)' : '0',
                textAlign: isRtl ? 'right' : 'left',
                color: activeSection === link.id || link.isButton ? 'var(--accent)' : 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '10px 14px',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Socials */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              paddingTop: '14px',
              borderTop: '1px solid var(--border)',
              marginTop: '6px'
            }}
          >
            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profileConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={'mailto:' + profileConfig.email}
              className="icon-btn"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 980px) {
          .desktop-nav {
            display: flex !important;
          }
          .nav-socials {
            display: flex !important;
          }
          .nav-divider {
            display: block !important;
          }
        }
        @media (max-width: 979px) {
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};