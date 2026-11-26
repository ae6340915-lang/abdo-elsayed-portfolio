import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection = () => {
  const { t, lang, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Derive unique categories from project data
  const categories = [
    { id: 'all', en: 'All Projects', ar: 'كل المشاريع' },
    { id: 'ml', en: 'Machine Learning', ar: 'التعلم الآلي' },
    { id: 'data-analysis', en: 'Data Analysis', ar: 'تحليل البيانات' },
    { id: 'python', en: 'Python', ar: 'بايثون' },
  ];

  const getProjectFilter = (project) => {
    const tech = project.technologies.map(t => t.toLowerCase()).join(' ');
    const cat = (project.category?.en || '').toLowerCase();
    if (cat.includes('machine learning') || cat.includes('classification')) return 'ml';
    if (cat.includes('analysis') || cat.includes('visualization')) return 'data-analysis';
    if (tech.includes('python')) return 'python';
    return 'ml';
  };

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => getProjectFilter(p) === activeFilter);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeading
          tag={t.projects.sectionTag}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: '7px 18px',
                borderRadius: 'var(--radius-full)',
                border: activeFilter === cat.id
                  ? '1px solid var(--accent)'
                  : '1px solid var(--border)',
                background: activeFilter === cat.id
                  ? 'var(--badge-bg)'
                  : 'transparent',
                color: activeFilter === cat.id
                  ? 'var(--accent)'
                  : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em'
              }}
            >
              {lang === 'ar' ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
            gap: '28px'
          }}
        >
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="reveal"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '52px'
          }}
        >
          <Link
            to="/projects"
            className="btn btn-secondary"
            style={{ gap: '8px' }}
          >
            <span>{t.projects.allProjects}</span>
            <ArrowUpRight
              size={16}
              style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
