import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export const ProjectsPage = () => {
  const { lang, t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const filters = [
    { id: 'ALL', labelEn: 'All Projects', labelAr: 'جميع المشاريع' },
    { id: 'ML', labelEn: 'Machine Learning', labelAr: 'تعلم آلي' },
    { id: 'DATA', labelEn: 'Data Analysis', labelAr: 'تحليل بيانات' }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'ML') return p.category.en.includes('Machine Learning');
    if (selectedFilter === 'DATA') return p.category.en.includes('Data Analysis');
    return true;
  });

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '96px', minHeight: '80vh' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '32px' }}>
          <Link
            to="/"
            className="btn btn-secondary btn-sm"
            style={{ gap: '8px' }}
          >
            {isRtl ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
            <span>{t.projects.backHome}</span>
          </Link>
        </div>

        <SectionHeading
          tag={t.projects.sectionTag}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={selectedFilter === f.id ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
            >
              {lang === 'ar' ? f.labelAr : f.labelEn}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};
