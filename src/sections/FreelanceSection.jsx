import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { freelancePlatforms } from '../data/freelanceData';
import { FreelanceIcon } from '../components/FreelanceIcons';

export const FreelanceSection = () => {
  const { t, isRtl } = useLanguage();
  const data = t.freelance;

  return (
    <section id="freelance" className="section freelance-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="freelance-header reveal">
          <span className="freelance-badge">{data.sectionTag}</span>
          <h2 className="freelance-title">{data.title}</h2>
          <p className="freelance-subtitle">{data.subtitle}</p>
        </div>

        <div className="freelance-grid">
          {freelancePlatforms.map((platform) => {
            const info = data.platforms[platform.id];

            return (
              <article
                key={platform.id}
                className="card freelance-card reveal"
                style={{
                  '--platform-color': platform.brandColor,
                  '--platform-bg': platform.brandBg,
                  '--platform-border': platform.brandBorder
                }}
              >
                <div className="freelance-card-head">
                  <div
                    className="freelance-icon-box"
                    style={{
                      background: platform.brandBg,
                      borderColor: platform.brandBorder,
                      boxShadow: `0 0 24px -4px ${platform.brandBg}`
                    }}
                  >
                    <FreelanceIcon platformId={platform.id} size={28} />
                  </div>
                  <span
                    className="freelance-role"
                    style={{
                      background: platform.brandBg,
                      borderColor: platform.brandBorder,
                      color: platform.badgeColor
                    }}
                  >
                    {info.role}
                  </span>
                </div>

                <div className="freelance-card-body">
                  <h3 className="freelance-card-title">{info.name}</h3>
                  <span className="freelance-card-subtitle" lang="ar" dir="rtl">{info.subName}</span>
                  <p className="freelance-card-description">{info.description}</p>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="freelance-btn"
                >
                  <span>{data.visitProfile}</span>
                  <ExternalLink
                    size={14}
                    style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .freelance-header {
          max-width: 760px;
          margin-bottom: 52px;
        }
        .freelance-badge {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          border-radius: 999px;
          background: #0B1A2A;
          border: 1px solid rgba(var(--accent-rgb), 0.28);
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .freelance-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.035em;
          color: #F8FAFC;
          margin-bottom: 14px;
        }
        .freelance-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          line-height: 1.7;
          color: #94A3B8;
        }
        .freelance-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }
        .freelance-card {
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 360px;
          padding: 24px;
          border-radius: var(--radius-lg);
          background: #0F172A;
          border: 1px solid rgba(148, 163, 184, 0.16);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .freelance-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .freelance-icon-box {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid;
          transition: transform var(--transition-fast);
        }
        .freelance-role {
          display: inline-flex;
          align-items: center;
          max-width: 170px;
          padding: 5px 11px;
          border: 1px solid;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
          transition: background var(--transition-fast);
        }
        .freelance-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .freelance-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.2;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        .freelance-card-subtitle {
          display: block;
          font-family: var(--font-arabic);
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748B;
          margin-bottom: 16px;
        }
        .freelance-card-description {
          font-size: 0.875rem;
          line-height: 1.65;
          color: #94A3B8;
          margin: 0;
        }
        .freelance-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 11px 14px;
          border: 1px solid var(--platform-border);
          border-radius: var(--radius-md);
          background: #0B1220;
          color: #E2E8F0;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }
        .freelance-card:hover {
          transform: translateY(-6px);
          border-color: var(--platform-border);
          box-shadow: 0 18px 38px -12px var(--platform-bg), var(--shadow-md);
        }
        .freelance-card:hover .freelance-icon-box {
          transform: scale(1.06);
        }
        .freelance-btn:hover {
          background: var(--platform-bg);
          border-color: var(--platform-color);
          color: var(--platform-color);
        }
        @media (max-width: 1080px) {
          .freelance-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 620px) {
          .freelance-header { margin-bottom: 36px; }
          .freelance-grid { grid-template-columns: 1fr; }
          .freelance-card { min-height: 0; }
          .freelance-role { max-width: 190px; }
        }
      `}</style>
    </section>
  );
};
