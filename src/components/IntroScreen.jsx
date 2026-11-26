import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const IntroScreen = () => {
  const { t, isRtl } = useLanguage();
  const [isVisible, setIsVisible] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Lock page scrolling while intro is displayed
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Animation sequence:
    // 0ms - 1500ms: Smooth fade-in, glowing effect, and centered brand presentation
    // 1500ms: Begin smooth fade out
    // 2100ms: Complete fade out and reveal main website cleanly
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="intro-screen"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: `
          radial-gradient(circle at 0% 0%, var(--accent-glow) 0%, transparent 36%),
          radial-gradient(circle at 100% 100%, var(--accent-glow) 0%, transparent 34%),
          radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--border) 18%, transparent) 1px, transparent 0)
        `,
        backgroundSize: '100% 100%, 100% 100%, 38px 38px',
        backgroundPosition: 'center, center, center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), visibility 600ms ease',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        userSelect: 'none'
      }}
    >
      {/* Centered Brand Presentation */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          transform: isFadingOut ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Glowing Logo Frame */}
        <div
          className="intro-logo-glow-wrapper"
          style={{
            position: 'relative',
            width: 'clamp(110px, 20vw, 140px)',
            height: 'clamp(110px, 20vw, 140px)',
            borderRadius: '26px',
            overflow: 'hidden',
            border: '1.5px solid rgba(var(--accent-rgb), 0.4)',
            boxShadow: '0 0 30px rgba(var(--accent-rgb), 0.35), 0 0 70px rgba(var(--accent-rgb), 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'introLogoFadeIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards, introCyanAura 2.4s infinite ease-in-out',
            background: '#070C2A'
          }}
        >
          {/* Ambient Inner Backdrop Glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(var(--accent-rgb), 0.2) 0%, transparent 75%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* Actual AE Monogram Logo */}
          <img
            src="/logo.png"
            alt="Abdo Elsayed"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              display: 'block'
            }}
          />
        </div>

        {/* Brand Text & AI Accent */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            animation: 'introTextFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards'
          }}
        >
          <div
            style={{
              fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-mono, monospace)',
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              letterSpacing: isRtl ? '0' : '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)'
            }}
          >
            {t.intro.title}<span style={{ color: 'var(--accent)' }}>.</span>
          </div>

          <div
            style={{
              fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-mono, monospace)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: isRtl ? '0' : '0.24em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              opacity: 0.9
            }}
          >
            {t.intro.subtitle}
          </div>

          {/* Subtle Accent Glow Line */}
          <div
            style={{
              marginTop: '4px',
              height: '2px',
              width: '48px',
              borderRadius: '1px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))',
              boxShadow: '0 0 12px rgba(var(--accent-rgb), 0.7)',
              animation: 'introLineGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s backwards'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes introLogoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

          @keyframes introCyanAura {
          0%, 100% {
            box-shadow: 0 0 25px rgba(var(--accent-rgb), 0.3), 0 0 60px rgba(var(--accent-rgb), 0.15);
            border-color: rgba(var(--accent-rgb), 0.35);
          }
          50% {
            box-shadow: 0 0 45px rgba(var(--accent-rgb), 0.55), 0 0 95px rgba(var(--accent-rgb), 0.3);
            border-color: rgba(var(--accent-rgb), 0.7);
          }
        }

        @keyframes introTextFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes introLineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 48px;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
