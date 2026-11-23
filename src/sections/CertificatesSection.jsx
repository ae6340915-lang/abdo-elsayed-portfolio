import React, { useState } from 'react';
import { Award, CheckCircle2, Clock, Calendar, ExternalLink, X, Eye, FileBadge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { certificatesData } from '../data/certificatesData';

export const CertificatesSection = () => {
  const { lang, t, isRtl } = useLanguage();
  const [modalCert, setModalCert] = useState(null);

  return (
    <section id="certificates" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.certificates.sectionTag}
          title={t.certificates.title}
          subtitle={t.certificates.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '28px'
          }}
        >
          {certificatesData.map((cert) => (
            <article
              key={cert.id}
              className="card certificate-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                transition: 'all var(--transition-normal)',
                position: 'relative'
              }}
            >
              {/* Certificate Image Preview (Never Cropped) */}
              <div
                onClick={() => setModalCert(cert)}
                className="cert-preview-box"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  height: '240px',
                  background: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px'
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title[lang]}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'transform var(--transition-smooth)'
                  }}
                  className="cert-img-thumb"
                />

                {/* Subtle Hover Overlay */}
                <div
                  className="cert-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 15, 23, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    opacity: 0,
                    backdropFilter: 'blur(3px)',
                    WebkitBackdropFilter: 'blur(3px)',
                    transition: 'opacity var(--transition-fast)'
                  }}
                >
                  <Eye size={18} />
                  <span>{t.certificates.viewCertificate}</span>
                </div>
              </div>

              {/* Certificate Metadata & Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <span className="badge" style={{ gap: '6px' }}>
                    <CheckCircle2 size={13} />
                    <span>{t.certificates.verifiedBadge}</span>
                  </span>

                  {cert.score && (
                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#10B981',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700
                      }}
                    >
                      {cert.score}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    margin: 0
                  }}
                >
                  {cert.title[lang]}
                </h3>

                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    lineHeight: 1.4
                  }}
                >
                  {cert.organization[lang]}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    flexGrow: 1
                  }}
                >
                  {cert.description[lang]}
                </p>

                {/* Key Spec Grid */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    padding: '10px 14px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{cert.period || cert.issueDate}</span>
                  </div>

                  {cert.hours && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{cert.hours}</span>
                    </div>
                  )}

                  {cert.score && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileBadge size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{cert.score}</span>
                    </div>
                  )}
                </div>

                {/* Key Skills Tags */}
                {cert.keySkills && cert.keySkills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cert.keySkills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action button */}
                <div style={{ paddingTop: '6px' }}>
                  <button
                    onClick={() => setModalCert(cert)}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '8px', width: '100%' }}
                  >
                    <Eye size={16} />
                    <span>{t.certificates.viewCertificate}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {modalCert && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(10, 15, 23, 0.9)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setModalCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '92vh',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={18} style={{ color: 'var(--accent)' }} />
                <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', fontWeight: 700 }}>
                  {modalCert.title[lang]}
                </h4>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href={modalCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  title="Open original"
                  aria-label="Open original image"
                  style={{ width: '34px', height: '34px' }}
                >
                  <ExternalLink size={15} />
                </a>
                <button
                  onClick={() => setModalCert(null)}
                  className="icon-btn"
                  title={t.certificates.closeModal}
                  aria-label={t.certificates.closeModal}
                  style={{ width: '34px', height: '34px' }}
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image */}
            <div
              style={{
                padding: '20px',
                overflowY: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--bg-primary)'
              }}
            >
              <img
                src={modalCert.image}
                alt={modalCert.title[lang]}
                style={{
                  maxWidth: '100%',
                  maxHeight: '76vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)'
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .certificate-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
          box-shadow: 0 12px 28px -6px rgba(var(--accent-rgb), 0.16), var(--shadow-md);
        }

        .cert-preview-box:hover .cert-img-thumb {
          transform: scale(1.03);
        }

        .cert-preview-box:hover .cert-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
