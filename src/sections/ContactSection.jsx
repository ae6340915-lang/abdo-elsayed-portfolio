import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { contactConfig } from '../data/contactData';
import { Github, Linkedin } from '../components/SocialIcons';

export const ContactSection = () => {
  const { t, isRtl } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const copyValue = async (value, setCopied) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setSubmitted(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!formState.name.trim()) nextErrors.name = t.contact.validationName;
    if (!formState.email.trim()) nextErrors.email = t.contact.validationEmail;
    else if (!/^\S+@\S+\.\S+$/.test(formState.email.trim())) nextErrors.email = t.contact.validationEmailFormat;
    if (!formState.message.trim()) nextErrors.message = t.contact.validationMessage;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = formState.subject.trim() || `Portfolio Inquiry from ${formState.name.trim()}`;
    const body = `From: ${formState.name.trim()} (${formState.email.trim()})\n\n${formState.message.trim()}`;
    const mailtoUrl = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading tag={t.contact.sectionTag} title={t.contact.title} subtitle={t.contact.description} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card reveal" style={{ padding: '24px' }}>
              <span className="contact-card-label">{t.contact.emailLabel}</span>
              <a href={`mailto:${contactConfig.email}`} className="contact-value-link" dir="ltr">
                <Mail size={19} />
                <span>{contactConfig.email}</span>
              </a>
              <div className="contact-actions">
                <a href={`mailto:${contactConfig.email}`} className="btn btn-primary btn-sm" style={{ gap: '6px' }}>
                  <Mail size={15} />
                  <span>{t.contact.openClient}</span>
                </a>
                <button type="button" onClick={() => copyValue(contactConfig.email, setCopiedEmail)} className="btn btn-secondary btn-sm" style={{ gap: '6px' }}>
                  {copiedEmail ? <Check size={15} style={{ color: 'var(--accent)' }} /> : <Copy size={15} />}
                  <span role="status" aria-live="polite">{copiedEmail ? t.contact.copied : t.contact.copyEmail}</span>
                </button>
              </div>
            </div>

            <div className="card reveal" style={{ padding: '24px', animationDelay: '0.06s' }}>
              <span className="contact-card-label">{t.contact.phoneLabel}</span>
              <a href={contactConfig.phoneHref} className="contact-value-link" dir="ltr">
                <Phone size={19} />
                <span>{contactConfig.phone}</span>
              </a>
              <span className="contact-phone-note" dir="ltr">{contactConfig.phoneDisplay}</span>
              <div className="contact-actions">
                <a href={contactConfig.phoneHref} className="btn btn-secondary btn-sm" style={{ gap: '6px' }}>
                  <Phone size={15} style={{ color: 'var(--accent)' }} />
                  <span>{t.contact.callDirect}</span>
                </a>
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <MessageCircle size={15} style={{ color: 'var(--accent)' }} />
                  <span>{t.contact.whatsappDirect}</span>
                </a>
                <button type="button" onClick={() => copyValue(contactConfig.phone, setCopiedPhone)} className="btn btn-secondary btn-sm" style={{ gap: '6px' }}>
                  {copiedPhone ? <Check size={15} style={{ color: 'var(--accent)' }} /> : <Copy size={15} />}
                  <span role="status" aria-live="polite">{copiedPhone ? t.contact.phoneCopied : t.contact.copyPhone}</span>
                </button>
              </div>
            </div>

            <div className="card reveal" style={{ padding: '24px', animationDelay: '0.12s' }}>
              <span className="contact-card-label" style={{ marginBottom: '14px' }}>{t.contact.socialsLabel}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={contactConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'space-between', paddingInline: '16px' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <Linkedin size={18} style={{ color: 'var(--accent)' }} />
                    <span>{t.contact.linkedinLabel}</span>
                  </span>
                  <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
                </a>
                <a
                  href={contactConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'space-between', paddingInline: '16px' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <Github size={18} style={{ color: 'var(--accent)' }} />
                    <span>{t.contact.githubLabel}</span>
                  </span>
                  <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>
            </div>
          </div>

          <div className="card reveal" style={{ padding: '32px', animationDelay: '0.08s' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
              {t.contact.formTitle}
            </h3>

            {submitted && (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: '12px 16px',
                  background: 'rgba(var(--accent-rgb), 0.1)',
                  border: '1px solid rgba(var(--accent-rgb), 0.3)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--accent)',
                  fontSize: '0.88rem',
                  marginBottom: '18px'
                }}
              >
                {t.contact.formSuccess}
              </div>
            )}

            <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="contact-field-label" htmlFor="contact-name">{t.contact.formName}</label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className="contact-input"
                />
                {errors.name && <span id="contact-name-error" className="contact-error">{errors.name}</span>}
              </div>

              <div>
                <label className="contact-field-label" htmlFor="contact-email">{t.contact.formEmail}</label>
                <input
                  id="contact-email"
                  type="email"
                  value={formState.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className="contact-input"
                />
                {errors.email && <span id="contact-email-error" className="contact-error">{errors.email}</span>}
              </div>

              <div>
                <label className="contact-field-label" htmlFor="contact-subject">{t.contact.formSubject}</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(event) => updateField('subject', event.target.value)}
                  className="contact-input"
                />
              </div>

              <div>
                <label className="contact-field-label" htmlFor="contact-message">{t.contact.formMessage}</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formState.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className="contact-input"
                  style={{ resize: 'vertical' }}
                />
                {errors.message && <span id="contact-message-error" className="contact-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '4px', gap: '8px' }}>
                <span>{t.contact.formSend}</span>
                <Send size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-card-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }
        .contact-value-link {
          display: flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          max-width: 100%;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 16px;
          transition: color var(--transition-fast);
        }
        .contact-value-link:hover { color: var(--accent); }
        .contact-phone-note {
          display: block;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          margin-top: -10px;
          margin-bottom: 16px;
        }
        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .contact-field-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .contact-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: inherit;
          outline: none;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .contact-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
        }
        .contact-input[aria-invalid="true"] { border-color: var(--error); }
        .contact-error {
          display: block;
          color: var(--error);
          font-size: 0.78rem;
          margin-top: 6px;
        }
        [dir="rtl"] .contact-value-link span { direction: ltr; }
      `}</style>
    </section>
  );
};
