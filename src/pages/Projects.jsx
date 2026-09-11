import { memo, useMemo, useState } from "react"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"
import { getSafeExternalUrl } from "../utils/security.js"

const projectFilters = ['all', 'webFullstack', 'mobile', 'dataAi', 'software'];

const ProjectVisualFallback = memo(({ project }) => (
  <div className="project-visual-placeholder" aria-label={project.name}>
    <div className="project-visual-topline">
      <span>{project.visualTitle || project.name}</span>
    </div>
    <div className="project-visual-flow" aria-hidden="true">
      {(project.visualItems || project.tags.slice(0, 4)).map((item) => (
        <span className="project-visual-step" key={`${project.name}-${item}`}>{item}</span>
      ))}
    </div>
  </div>
));

const ProjectCard = memo(({ project, t, featured = false }) => (
  <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
    <div className="project-image-frame">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.name}
          className={`project-image ${project.imageFit === 'cover' ? 'project-image-cover' : ''}`}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <ProjectVisualFallback project={project} />
      )}
    </div>

    <div className="mt-5 flex flex-col">
      {project.status && (
        <span className={`project-status-badge project-status-${project.status}`} aria-label={`${t.projects.statusLabel}: ${t.projects.statuses[project.status]}`}>
          {t.projects.statuses[project.status]}
        </span>
      )}

      <h2 className="text-2xl font-poppins font-semibold">
        {project.name}
      </h2>
      <p className="mt-3 text-slate-500">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.technologiesLabel}>
        {project.tags.map((tag) => (
          <span className="project-tag" key={`${project.name}-${tag}`}>
            {tag}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} t={t} />
    </div>
  </article>
));

const ProjectLinks = ({ project, t }) => {
  const repoLink = getSafeExternalUrl(project.repoLink);
  const liveLink = getSafeExternalUrl(project.liveLink);
  const demoLink = getSafeExternalUrl(project.demoLink);
  const demoLabel = project.demoLabel || t.projects.recording;
  const openDemoLabel = project.openDemoLabel || t.projects.openRecording;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 font-poppins">
      {repoLink && (
        <a href={repoLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="project-link">
          {t.projects.repository}
          <img src={arrow} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
          <span className="sr-only">{t.projects.openRepository}</span>
        </a>
      )}

      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="project-link">
          {t.projects.liveSite}
          <img src={arrow} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
          <span className="sr-only">{t.projects.openLiveSite}</span>
        </a>
      )}

      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="project-link project-link-secondary">
          {demoLabel}
          <img src={arrow} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
          <span className="sr-only">{openDemoLabel}</span>
        </a>
      )}
    </div>
  );
};

ProjectCard.displayName = 'ProjectCard';
ProjectVisualFallback.displayName = 'ProjectVisualFallback';

const Projects = ({ language, t }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const localizedProjects = useMemo(
    () => projects.map(({ content, ...project }) => ({
      ...project,
      ...(content[language] || content.pt),
    })),
    [language]
  );

  const filteredProjects = useMemo(
    () => activeFilter === 'all'
      ? localizedProjects
      : localizedProjects.filter((project) => project.category === activeFilter),
    [activeFilter, localizedProjects]
  );

  const featuredProjects = useMemo(
    () => localizedProjects.filter((project) => project.featured && (
      activeFilter === 'all' || project.category === activeFilter
    )),
    [activeFilter, localizedProjects]
  );

  const regularProjects = useMemo(
    () => filteredProjects.filter((project) => !project.featured),
    [filteredProjects]
  );

  return (
    <section className="max-container">
      <h1 className="head-text">
        {t.projects.titlePrefix} <span className="blue-gradient_text font-semibold drop-shadow">{t.projects.titleHighlight}</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t.projects.intro}</p>
      </div>

      <div className="project-filter-tabs" aria-label={t.projects.filterLabel}>
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter-tab ${activeFilter === filter ? 'project-filter-tab-active' : ''}`}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {t.projects.filters[filter]}
          </button>
        ))}
      </div>

      {featuredProjects.length > 0 && (
        <section className="featured-projects-section" aria-labelledby="featured-projects-title">
          <div className="featured-projects-header">
            <span className="featured-projects-kicker">{t.projects.featuredKicker}</span>
            <h2 id="featured-projects-title" className="featured-projects-title">
              {t.projects.featuredTitle}
            </h2>
            <p className="featured-projects-intro">{t.projects.featuredIntro}</p>
          </div>

          <div className="featured-project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} t={t} featured key={project.repoLink || project.liveLink || project.name} />
            ))}
          </div>
        </section>
      )}

      <div className="grid mt-12 mb-20 gap-12 md:grid-cols-2">
        {regularProjects.map((project) => (
          <ProjectCard project={project} t={t} key={project.repoLink || project.liveLink || project.name} />
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA t={t} />
    </section>
  )
}

export default Projects
