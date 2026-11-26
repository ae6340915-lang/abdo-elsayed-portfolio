import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { BarChart3, Database, Cpu, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

const getIcon = (id, size = 22) => {
  const style = { color: 'var(--accent)' };
  if (id === 1) return <BarChart3 size={size} style={style} />;
  if (id === 2) return <Database size={size} style={style} />;
  if (id === 3) return <Cpu size={size} style={style} />;
  return <Code2 size={size} style={style} />;
};

export const ServicesSection = () => {
  const { t, isRtl } = useLanguage();
  const data = t.servicesData;

  if (!data) return null;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="services-header reveal">
          <span className="services-badge">{data.sectionTag}</span>
          <h2 className="services-title">{data.title}</h2>
          <p className="services-subtitle">{data.subtitle}</p>
        </div>

        <div className="services-grid">
          {data.list.map((service, index) => (
            <article
              key={service.id}
              className="card service-card reveal"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="service-icon-box">{getIcon(service.id)}</div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.desc}</p>

              <p className="service-problem">
                <strong className="service-problem-label">{data.problem}</strong> {service.prob}
              </p>

              <p className="service-result">
                <CheckCircle2 size={15} className="service-result-icon" />
                <span>
                  <strong className="service-result-label">{data.result}</strong> {service.res}
                </span>
              </p>

              <div className="service-tech">
                {service.tech.map((tech) => (
                  <span key={tech} className="service-tech-pill">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="packages-wrap reveal">
          <h3 className="packages-title">{data.packagesTitle}</h3>
          <div className="packages-grid">
            {data.packages.map((item) => (
              <article key={item.id} className="card package-card">
                <h4 className="package-title">{item.title}</h4>
                <p className="package-description">{item.desc}</p>
                <button type="button" className="package-btn" onClick={scrollToContact}>
                  <span>{data.contactMe}</span>
                  <ArrowRight size={15} style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .services-header {
          max-width: 760px;
          margin-bottom: 52px;
        }
        .services-badge {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          border-radius: 999px;
          background: #0B1A2A;
          border: 1px solid rgba(var(--accent-rgb), 0.35);
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .services-title,
        .packages-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.035em;
          color: #F8FAFC;
          margin: 0 0 24px;
        }
        .services-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          line-height: 1.7;
          color: #94A3B8;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          min-height: 360px;
          padding: 26px;
          border-radius: var(--radius-lg);
          background: #0F172A;
          border: 1px solid rgba(148, 163, 184, 0.16);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .service-icon-box {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.22);
        }
        .service-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0;
        }
        .service-card-description {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #94A3B8;
          margin: 0;
        }
        .service-problem,
        .service-result {
          display: flex;
          gap: 8px;
          font-size: 0.86rem;
          line-height: 1.65;
          margin: 0;
        }
        .service-problem {
          color: #64748B;
        }
        .service-problem-label {
          color: #F1F5F9;
          font-weight: 700;
        }
        .service-result {
          color: rgba(var(--accent-rgb), 0.7);
        }
        .service-result-icon {
          flex-shrink: 0;
          color: #34D399;
          margin-top: 3px;
        }
        .service-result-label {
          color: #F8FAFC;
          font-weight: 700;
        }
        .service-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          padding-top: 4px;
        }
        .service-tech-pill {
          padding: 4px 10px;
          border-radius: 999px;
          background: #0B1220;
          border: 1px solid rgba(148, 163, 184, 0.18);
          color: #94A3B8;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(var(--accent-rgb), 0.45);
          box-shadow: 0 18px 38px -18px rgba(var(--accent-rgb), 0.28), var(--shadow-md);
        }
        .packages-wrap {
          margin-top: 68px;
          text-align: center;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .package-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 240px;
          padding: 26px;
          border-radius: var(--radius-lg);
          background: #0F172A;
          border: 1px solid rgba(148, 163, 184, 0.16);
          text-align: start;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .package-card:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--accent-rgb), 0.45);
          box-shadow: 0 18px 34px -18px rgba(var(--accent-rgb), 0.35);
        }
        .package-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent);
          margin: 0;
        }
        .package-description {
          flex-grow: 1;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #94A3B8;
          margin: 0;
        }
        .package-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 11px 16px;
          border: 1px solid var(--accent);
          border-radius: var(--radius-md);
          background: transparent;
          color: var(--accent);
          font-size: 0.87rem;
          font-weight: 700;
          cursor: pointer;
          transition: background var(--transition-normal), color var(--transition-normal), transform var(--transition-fast), box-shadow var(--transition-normal);
        }
        .package-btn:hover {
          background: var(--accent);
          color: var(--btn-primary-text);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -8px rgba(var(--accent-rgb), 0.7);
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr; }
          .packages-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
          .service-card { min-height: 0; }
        }
        @media (max-width: 620px) {
          .services-header { margin-bottom: 36px; }
          .packages-wrap { margin-top: 48px; }
        }
      `}</style>
    </section>
  );
};
