import React from 'react';

export const SectionHeading = ({ tag, title, subtitle, centered = false, accentWord = null }) => {
  // If accentWord is provided, highlight that word in the title with accent color
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span style={{ color: 'var(--accent)' }}>{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className="reveal"
      style={{
        textAlign: centered ? 'center' : 'start',
        maxWidth: centered ? '740px' : '700px',
        marginInline: centered ? 'auto' : '0',
        marginBottom: '52px'
      }}
    >
      {tag && (
        <span
          className="badge"
          style={{
            marginBottom: '16px',
            marginInline: centered ? 'auto' : '0',
            display: centered ? 'flex' : 'inline-flex',
            width: 'fit-content',
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined
          }}
        >
          {tag}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1.18,
          marginBottom: subtitle ? '14px' : '0'
        }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.75vw, 1.075rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: centered ? '600px' : '100%',
            marginInline: centered ? 'auto' : '0'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
