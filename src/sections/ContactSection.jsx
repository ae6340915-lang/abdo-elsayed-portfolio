import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MessageCircle, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { profileConfig } from '../data/profileData';
import { Github, Linkedin } from '../components/SocialIcons';

export const ContactSection = () => {
  const { t, isRtl } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // دالة إرسال الرسالة باستخدام EmailJS
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    const serviceId = 'service_0v116rq';
    const templateId = 'template_wter6be';
    const publicKey = 'RM5nHRjjW_9z2ImhM';

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      title: formState.subject,
      message: formState.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setSubmitted(true); // إظهار رسالة النجاح
          setFormState({ name: '', email: '', subject: '', message: '' }); // تفريغ الخانات
          setTimeout(() => setSubmitted(false), 5000); // إخفاء الرسالة بعد 5 ثواني
      }, (error) => {
          console.log('FAILED...', error.text);
          alert(isRtl ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          tag={t.contact.sectionTag}
          title={t.contact.title}
          subtitle={t.contact.description}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact & Profiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div className="card" style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}
              >
                {t.contact.emailLabel}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  wordBreak: 'break-all'
                }}
              >
                {profileConfig.email}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={'mailto:' + profileConfig.email}
                  className="btn btn-primary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <Mail size={15} />
                  <span>{t.contact.openClient}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  {copiedEmail ? <Check size={15} style={{ color: '#10B981' }} /> : <Copy size={15} />}
                  <span>{copiedEmail ? t.contact.copied : t.contact.copyEmail}</span>
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="card" style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}
              >
                {t.contact.phoneLabel}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  direction: 'ltr',
                  textAlign: isRtl ? 'right' : 'left'
                }}
              >
                {profileConfig.phoneFormatted}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={profileConfig.phoneTel}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <Phone size={15} style={{ color: 'var(--accent)' }} />
                  <span>{t.contact.callDirect}</span>
                </a>
                <a
                  href={profileConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  <MessageCircle size={15} style={{ color: '#10B981' }} />
                  <span>{t.contact.whatsappDirect}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '6px' }}
                >
                  {copiedPhone ? <Check size={15} style={{ color: '#10B981' }} /> : <Copy size={15} />}
                  <span>{copiedPhone ? t.contact.phoneCopied : t.contact.copyPhone}</span>
                </button>
              </div>
            </div>

            {/* Socials Card */}
            <div className="card" style={{ padding: '24px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '14px'
                }}
              >
                {t.contact.socialsLabel}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={profileConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'space-between', paddingInline: '16px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Linkedin size={18} style={{ color: 'var(--accent)' }} />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
                </a>

                <a
                  href={profileConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'space-between', paddingInline: '16px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Github size={18} style={{ color: 'var(--accent)' }} />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink size={15} style={{ color: 'var(--text-muted)' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="card" style={{ padding: '32px' }}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px'
              }}
            >
              {t.contact.formTitle}
            </h3>

            {submitted && (
              <div
                style={{
                  padding: '14px 18px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  color: '#10B981',
                  fontSize: '0.9rem',
                  marginBottom: '20px'
                }}
              >
                {t.contact.formSuccess}
              </div>
            )}

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  {t.contact.formName}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  {t.contact.formEmail}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  {t.contact.formSubject}
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '8px' }}
              >
                <span>{t.contact.formSend}</span>
                <Send size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};