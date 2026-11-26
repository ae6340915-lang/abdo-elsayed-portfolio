import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink, Eye, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { certificatesData } from '../data/certificatesData';

export const CertificatesSection = () => {
  const { lang, t } = useLanguage();
  const [activeCert, setActiveCert] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const data = t.certificates;
  const localize = (enValue, arValue) => (lang === 'ar' ? arValue : enValue);

  useEffect(() => {
    if (!activeCert) return undefined;
    previouslyFocusedRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCert(null);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [activeCert]);

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading tag={data.sectionTag} title={data.title} subtitle={data.subtitle} />

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {data.training.map((item) => (
            <div key={item.name} className="glass-card" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <Award size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>{item.name}</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.detail}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '28px'
          }}
        >
          {certificatesData.map((cert, index) => (
            <article
              key={cert.id}
              className="card certificate-card reveal"
              style={{ padding: '20px', animationDelay: `${index * 0.08}s` }}
            >
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="certificate-preview"
                aria-label={`${data.viewCertificate}: ${localize(cert.title, cert.titleAr)}`}
                style={{
                  width: '100%',
                  height: '230px',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={cert.image}
                  alt={localize(cert.title, cert.titleAr)}
                  className="certificate-image"
                  width={cert.width}
                  height={cert.height}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 'var(--radius-sm)'
                  }}
                />
                <span className="certificate-overlay">
                  <Eye size={18} />
                  {data.viewCertificate}
                </span>
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 4px 4px' }}>
                <span className="section-tag">{localize(cert.organization, cert.organizationAr)}</span>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{localize(cert.title, cert.titleAr)}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{localize(cert.description, cert.descriptionAr)}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  <Calendar size={14} style={{ color: 'var(--accent)' }} />
                  <span>{localize(cert.date, cert.dateAr)}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {localize(cert.skills, cert.skillsAr || cert.skills).map((skill) => (
                    <span key={skill} className="tag" style={{ fontSize: '0.74rem' }}>{skill}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '6px' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setActiveCert(cert)}
                  >
                    <Eye size={15} />
                    <span>{data.viewCertificate}</span>
                  </button>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={15} />
                      <span>{data.credentialUrl}</span>
                    </a>
                  ) : (
                    <span className="btn btn-secondary btn-sm" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                      {data.credentialMissing}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '32px' }}>
          <span className="mono-label">{data.focusTitle}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
            {data.focus.map((area) => (
              <span key={area} className="badge">{area}</span>
            ))}
          </div>
        </div>
      </div>

      {activeCert && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={localize(activeCert.title, activeCert.titleAr)}
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(8, 10, 12, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
            className="glass-card"
            style={{
              width: 'min(900px, 100%)',
              maxHeight: '92vh',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                padding: '16px 20px',
                borderBottom: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={18} style={{ color: 'var(--accent)' }} />
                <h4 style={{ fontSize: '1rem', margin: 0 }}>{localize(activeCert.title, activeCert.titleAr)}</h4>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-btn"
                onClick={() => setActiveCert(null)}
                aria-label={data.closeModal}
                style={{ width: '36px', height: '36px' }}
              >
                <X size={17} />
              </button>
            </div>
            <div
              style={{
                padding: '20px',
                overflowY: 'auto',
                background: 'var(--bg-primary)',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img
                src={activeCert.image}
                alt={localize(activeCert.title, activeCert.titleAr)}
                width={activeCert.width}
                height={activeCert.height}
                decoding="async"
                style={{ maxWidth: '100%', maxHeight: '74vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .certificate-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-md);
        }
        .certificate-image {
          transition: transform var(--transition-smooth);
        }
        .certificate-preview:hover .certificate-image {
          transform: scale(1.025);
        }
        .certificate-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(8, 10, 12, 0.68);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .certificate-preview:hover .certificate-overlay,
        .certificate-preview:focus-visible .certificate-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
