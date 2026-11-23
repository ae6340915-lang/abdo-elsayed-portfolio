import React, { useState, useEffect } from 'react';

export const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

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
        backgroundColor: '#0A0F17',
        backgroundImage: `
          radial-gradient(circle at 50% 48%, rgba(6, 182, 212, 0.15) 0%, rgba(10, 15, 23, 0.88) 50%, #0A0F17 100%),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.04) 1px, transparent 0)
        `,
        backgroundSize: '100% 100%, 32px 32px',
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
            border: '1.5px solid rgba(6, 182, 212, 0.4)',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.35), 0 0 70px rgba(59, 130, 246, 0.2)',
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
              background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, transparent 75%)',
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
              fontFamily: 'var(--font-mono, monospace)',
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2.4vw, 1.25rem)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F8FAFC'
            }}
          >
            Abdo Elsayed<span style={{ color: '#06B6D4' }}>.</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#06B6D4',
              opacity: 0.9
            }}
          >
            Data & Machine Learning
          </div>

          {/* Subtle Accent Glow Line */}
          <div
            style={{
              marginTop: '4px',
              height: '2px',
              width: '48px',
              borderRadius: '1px',
              background: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.7)',
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
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.3), 0 0 60px rgba(59, 130, 246, 0.15);
            border-color: rgba(6, 182, 212, 0.35);
          }
          50% {
            box-shadow: 0 0 45px rgba(6, 182, 212, 0.55), 0 0 95px rgba(59, 130, 246, 0.3);
            border-color: rgba(6, 182, 212, 0.7);
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
