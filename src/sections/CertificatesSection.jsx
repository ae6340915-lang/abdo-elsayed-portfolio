import React, { useState } from 'react';
import { Award, CheckCircle2, Clock, Calendar, ExternalLink, X, Eye, FileBadge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { certificatesData } from '../data/certificatesData';

export const CertificatesSection = () => {
  const { lang, t, isRtl } = useLanguage();
  const [modalCert, setModalCert] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          tag={t.certificates.sectionTag}
          title={t.certificates.title}
          subtitle={t.certificates.subtitle}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', maxWidth: '960px', margin: '0 auto' }}>
          {certificatesData.map((cert) => (
            <article
              key={cert.id}
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                padding: '32px',
                alignItems: 'center',
                transition: 'all var(--transition-normal)'
              }}
            >
              {/* Certificate Image Preview with Hover Trigger */}
              <div
                onClick={() => setModalCert(cert)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  group: 'preview'
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title[lang]}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Subtle Hover Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 15, 23, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    opacity: 0.9,
                    backdropFilter: 'blur(2px)',
                    transition: 'opacity var(--transition-fast)'
                  }}
                >
                  <Eye size={18} />
                  <span>{t.certificates.viewCertificate}</span>
                </div>
              </div>

              {/* Certificate Metadata & Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <span className="badge" style={{ gap: '6px' }}>
                    <CheckCircle2 size={13} />
                    <span>{t.certificates.verifiedBadge}</span>
                  </span>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      color: '#10B981',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    {cert.score}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.25
                  }}
                >
                  {cert.title[lang]}
                </h3>

                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    lineHeight: 1.4
                  }}
                >
                  {cert.organization[lang]}
                </div>

                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {cert.description[lang]}
                </p>

                {/* Key Spec Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '10px',
                    padding: '12px 14px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{cert.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{cert.hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FileBadge size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{cert.score}</span>
                  </div>
                </div>

                {/* Validated Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.keySkills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div style={{ paddingTop: '8px' }}>
                  <button
                    onClick={() => setModalCert(cert)}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '8px' }}
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
            backgroundColor: 'rgba(10, 15, 23, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
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
                <h4 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-primary)' }}>
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
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setModalCert(null)}
                  className="icon-btn"
                  title={t.certificates.closeModal}
                  aria-label={t.certificates.closeModal}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image */}
            <div
              style={{
                padding: '16px',
                overflowY: 'auto',
                display: 'flex',
                justifyContent: 'center',
                background: 'var(--bg-secondary)'
              }}
            >
              <img
                src={modalCert.image}
                alt={modalCert.title[lang]}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
