import React from 'react';

export const SectionHeading = ({ tag, title, subtitle, centered = false }) => {
  return (
    <div
      style={{
        textAlign: centered ? 'center' : 'start',
        maxWidth: centered ? '720px' : '680px',
        marginInline: centered ? 'auto' : '0',
        marginBottom: '48px'
      }}
    >
      {tag && (
        <span
          className="badge"
          style={{
            marginBottom: '14px',
            marginInline: centered ? 'auto' : '0'
          }}
        >
          {tag}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: subtitle ? '14px' : '0'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.075rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
