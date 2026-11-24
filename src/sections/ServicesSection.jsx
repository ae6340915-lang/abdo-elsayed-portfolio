import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { BarChart3, Database, Cpu, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = () => {
  const { t, isRtl } = useLanguage();
  
  // بناخد البيانات من ملفات الترجمة بدل ما تكون ثابتة
  const data = t.servicesData;

  const getIcon = (id) => {
    const style = { color: 'var(--accent)' };
    switch (id) {
      case 1: return <BarChart3 size={28} style={style} />;
      case 2: return <Database size={28} style={style} />;
      case 3: return <Cpu size={28} style={style} />;
      case 4: return <Code2 size={28} style={style} />;
      default: return <BarChart3 size={28} style={style} />;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // لو الترجمة لسه مش موجودة، مش بنعرض حاجة عشان ميحصلش إيرور
  if (!data) return null;

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={data.sectionTag}
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {data.list.map((service) => (
            <div key={service.id} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              
              <div style={{ marginBottom: '20px', padding: '14px', background: 'var(--badge-bg)', borderRadius: 'var(--radius-md)', display: 'inline-flex', width: 'fit-content' }}>
                {getIcon(service.id)}
              </div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {service.title}
              </h3>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                {service.desc}
              </p>
              
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{data.problem}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{service.prob}</div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10B981', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} /> {data.result}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{service.res}</div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                {service.tech.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing / Packages */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '32px' }}>
            {data.packagesTitle}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {data.packages.map((pkg, idx) => (
              <div key={idx} className="card" style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>
                  {pkg.name}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', flexGrow: 1 }}>
                  {pkg.desc}
                </p>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  {data.discussBtn}
                </div>
                <button 
                  onClick={scrollToContact}
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                >
                  {data.discussBtn} <ArrowRight size={16} style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};