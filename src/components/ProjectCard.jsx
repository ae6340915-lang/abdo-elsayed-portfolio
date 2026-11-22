import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Github } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { ProjectVisual } from './DataVisuals';

export const ProjectCard = ({ project }) => {
  const { lang, t, isRtl } = useLanguage();

  return (
    <article
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '0',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)'
      }}
    >
      {/* Visual Thumbnail */}
      <div
        style={{
          position: 'relative',
          height: '210px',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden'
        }}
      >
        <ProjectVisual type={project.visualType} />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            insetInlineEnd: '12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '3px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            color: 'var(--accent)'
          }}
        >
          {project.number}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Category */}
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}
        >
          {project.category[lang]}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            lineHeight: 1.3
          }}
        >
          {project.title[lang]}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.925rem',
            color: 'var(--text-secondary)',
            marginBottom: '18px',
            lineHeight: 1.6,
            flexGrow: 1
          }}
        >
          {project.description[lang]}
        </p>

        {/* Dataset Summary Pill */}
        <div
          style={{
            padding: '8px 12px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Layers size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span>{project.datasetSummary[lang]}</span>
        </div>

        {/* Tech Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '24px'
          }}
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <Link
            to={'/projects/' + project.id}
            className="btn btn-primary btn-sm"
            style={{ flexGrow: 1 }}
          >
            <span>{t.projects.viewCaseStudy}</span>
            <ArrowUpRight
              size={15}
              style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
            />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title={t.projects.githubRepo}
            aria-label={t.projects.githubRepo}
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};
