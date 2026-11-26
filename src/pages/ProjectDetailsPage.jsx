import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, ListOrdered } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { projectsData } from '../data/projectsData';
import { ProjectVisual } from '../components/DataVisuals';
import { Github } from '../components/SocialIcons';

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const { lang, t, isRtl } = useLanguage();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const { caseStudy } = project;
  const sections = t.projects.sections;

  // Next / Previous navigation
  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const tocItems = [
    { id: 'sec-overview', label: sections.overview },
    { id: 'sec-problem', label: sections.problemStatement },
    { id: 'sec-objective', label: sections.objective },
    { id: 'sec-dataset', label: sections.dataset },
    { id: 'sec-eda', label: sections.eda },
    { id: 'sec-prep', label: sections.preprocessing },
    { id: 'sec-method', label: sections.methodology },
    { id: 'sec-models', label: sections.modelExperiments },
    { id: 'sec-metrics', label: sections.evaluationMetrics },
    { id: 'sec-results', label: sections.results },
    { id: 'sec-challenges', label: sections.challenges },
    { id: 'sec-insights', label: sections.keyInsights },
    { id: 'sec-lessons', label: sections.lessonsLearned },
    ...(project.githubUrl ? [{ id: 'sec-repo', label: sections.githubLink }] : [])
  ];

  const scrollToSec = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main id="main-content" style={{ paddingTop: '100px', paddingBottom: '96px', minHeight: '100vh' }}>
      <div className="container">
        {/* Navigation Breadcrumbs & Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <Link
            to="/#projects"
            className="btn btn-secondary btn-sm"
            style={{ gap: '8px' }}
          >
            {isRtl ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
            <span>{t.projects.backHome}</span>
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ gap: '8px' }}
            >
              <Github size={16} />
              <span>{t.projects.githubRepo}</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Case Study Header Banner */}
        <div
          className="card"
          style={{
            marginBottom: '40px',
            padding: '36px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--accent)',
                fontSize: '0.9rem'
              }}
            >
              PROJECT {project.number}
            </span>
            <span style={{ color: 'var(--border)' }}>•</span>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                textTransform: 'uppercase'
              }}
            >
              {project.category[lang]}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '18px'
            }}
          >
            {project.title[lang]}
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '880px',
              marginBottom: '28px'
            }}
          >
            {project.description[lang]}
          </p>

          {/* Quick Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)'
            }}
          >
            {project.datasetStats.map((stat) => (
              <div
                key={stat.labelEn}
                style={{
                  padding: '14px 18px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: isRtl ? 'var(--font-arabic)' : 'var(--font-mono)',
                    marginBottom: '4px'
                  }}
                >
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Diagram Banner */}
        <div
          className="card"
          style={{
            marginBottom: '48px',
            padding: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            height: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Two-Column Layout: Sticky Sidebar TOC + 14 Structured Sections */}
        <div
          className="case-study-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Desktop Table of Contents Sidebar */}
          <aside
            className="case-study-toc"
            style={{
              position: 'sticky',
              top: '96px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ListOrdered size={15} />
              <span>{lang === 'ar' ? 'فهرس دراسة الحالة' : 'CASE STUDY TOC'}</span>
            </div>

            {tocItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSec(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: isRtl ? 'right' : 'left',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'none';
                }}
              >
                {item.label}
              </button>
            ))}
          </aside>

          {/* 14 Structured Case Study Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* 1. Overview */}
            <section id="sec-overview" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.overview}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.overview[lang]}
              </p>
            </section>

            {/* 2. Problem Statement */}
            <section id="sec-problem" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.problemStatement}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.problemStatement[lang]}
              </p>
            </section>

            {/* 3. Objective */}
            <section id="sec-objective" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.objective}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.objective[lang]}
              </p>
            </section>

            {/* 4. Dataset Specification */}
            <section id="sec-dataset" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.dataset}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '18px' }}>
                {caseStudy.dataset[lang]}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tItem) => (
                  <span key={tItem} className="tag">
                    {tItem}
                  </span>
                ))}
              </div>
            </section>

            {/* 5. Exploratory Data Analysis */}
            <section id="sec-eda" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.eda}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.eda[lang]}
              </p>
            </section>

            {/* 6. Data Preprocessing */}
            <section id="sec-prep" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.preprocessing}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.preprocessing[lang]}
              </p>
            </section>

            {/* 7. Methodology */}
            <section id="sec-method" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.methodology}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.methodology[lang]}
              </p>
            </section>

            {/* 8. Model Experiments */}
            <section id="sec-models" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.modelExperiments}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.modelExperiments[lang]}
              </p>
            </section>

            {/* 9. Evaluation Metrics */}
            <section id="sec-metrics" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.evaluationMetrics}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.evaluationMetrics[lang]}
              </p>
            </section>

            {/* 10. Empirical Results */}
            <section
              id="sec-results"
              className="card"
              style={{
                borderInlineStart: '4px solid var(--accent)'
              }}
            >
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.results}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.results[lang]}
              </p>
            </section>

            {/* 11. Technical Challenges */}
            <section id="sec-challenges" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.challenges}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.challenges[lang]}
              </p>
            </section>

            {/* 12. Key Insights */}
            <section id="sec-insights" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.keyInsights}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.keyInsights[lang]}
              </p>
            </section>

            {/* 13. Lessons Learned */}
            <section id="sec-lessons" className="card">
              <h2 style={{ fontSize: '1.35rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {sections.lessonsLearned}
              </h2>
              <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {caseStudy.lessonsLearned[lang]}
              </p>
            </section>

            {/* 14. Repository & Implementation Link */}
            {project.githubUrl && (
              <section
                id="sec-repo"
                className="card"
                style={{
                  background: 'var(--bg-secondary)',
                  textAlign: 'center',
                  padding: '36px'
                }}
              >
                <h2 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {sections.githubLink}
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {lang === 'ar'
                    ? 'استكشف الكود البرمجي الكامل، ودفاتر Jupyter، ومسارات المعالجة على GitHub.'
                    : 'Explore the complete code repository, Jupyter notebooks, and preprocessing scripts on GitHub.'}
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', gap: '8px' }}
                >
                  <Github size={18} />
                  <span>{t.projects.githubRepo}</span>
                  <ExternalLink size={14} />
                </a>
              </section>
            )}
          </div>
        </div>

        {/* Prev / Next Project Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {prevProject ? (
            <Link
              to={'/projects/' + prevProject.id}
              className="btn btn-secondary"
              style={{ gap: '8px' }}
            >
              {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              <span>{prevProject.title[lang]}</span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={'/projects/' + nextProject.id}
              className="btn btn-secondary"
              style={{ gap: '8px' }}
            >
              <span>{nextProject.title[lang]}</span>
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          ) : <div />}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .case-study-layout {
            grid-template-columns: 1fr !important;
          }
          .case-study-toc {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
};
