import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Github } from './SocialIcons';
import { useLanguage } from '../hooks/useLanguage';
import { ProjectVisual } from './DataVisuals';

export const ProjectCard = ({ project }) => {
  const { lang, t, isRtl } = useLanguage();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '0',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        borderColor: hovered ? 'var(--border-hover)' : 'var(--border)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--border-hover)' : 'none',
        overflow: 'hidden'
      }}
    >
      {/* Accent top bar on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity var(--transition-normal)',
          zIndex: 2
        }}
      />

      {/* Visual Thumbnail */}
      <div
        style={{
          position: 'relative',
          height: '200px',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        <ProjectVisual type={project.visualType} />
        {/* Project number badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            insetInlineStart: '12px',
            background: 'rgba(8, 13, 20, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border)',
            padding: '3px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em'
          }}
        >
          {project.number}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: '0'
        }}
      >
        {/* Category */}
        <div
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: '7px',
            fontFamily: 'var(--font-mono)'
          }}
        >
          {project.category[lang]}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            marginBottom: '10px',
            lineHeight: 1.3,
            transition: 'color var(--transition-fast)',
            color: hovered ? 'var(--accent-hover)' : 'var(--text-primary)'
          }}
        >
          {project.title[lang]}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            lineHeight: 1.65,
            flexGrow: 1
          }}
        >
          {project.description[lang]}
        </p>

        {/* Dataset Summary Pill */}
        <div
          style={{
            padding: '7px 12px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '7px'
          }}
        >
          <Layers size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <span>{project.datasetSummary[lang]}</span>
        </div>

        {/* Tech Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            marginBottom: '20px'
          }}
        >
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tag" style={{ fontSize: '0.74rem' }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              className="tag"
              style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingTop: '14px',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 'auto'
          }}
        >
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-primary btn-sm"
            style={{ flexGrow: 1, justifyContent: 'center' }}
          >
            <span>{t.projects.viewCaseStudy}</span>
            <ArrowUpRight
              size={14}
              style={{ transform: isRtl ? 'scaleX(-1)' : 'none' }}
            />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title={t.projects.githubRepo}
              aria-label={t.projects.githubRepo}
              style={{ flexShrink: 0 }}
            >
              <Github size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
