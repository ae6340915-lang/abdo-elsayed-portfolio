import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

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

    const sections = ['hero', 'about', 'what-i-do', 'skills', 'approach', 'projects', 'journey', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
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
    { id: 'journey', label: t.nav.journey },
    { id: 'contact', label: t.nav.contact }
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
          height: '72px'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick('hero')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none'
          }}
          aria-label="Abdo Elsayed Home"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '1.45rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}
          >
            AE<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.925rem',
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

        {/* Controls: Theme & Language & Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="icon-btn"
            style={{ width: 'auto', paddingInline: '12px', gap: '6px', fontSize: '0.825rem', fontWeight: 600 }}
            title={t.nav.switchLang}
            aria-label={t.nav.switchLang}
          >
            <Globe size={15} />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="icon-btn"
            title={t.nav.switchTheme}
            aria-label={t.nav.switchTheme}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn mobile-toggle"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            gap: '16px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: isRtl ? 'right' : 'left',
                color: activeSection === link.id ? 'var(--accent)' : 'var(--text-primary)',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '8px 0',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{'\n@media (min-width: 860px) {\n  .desktop-nav {\n    display: flex !important;\n  }\n}\n@media (max-width: 859px) {\n  .mobile-toggle {\n    display: inline-flex !important;\n  }\n}\n'}</style>
    </header>
  );
};
