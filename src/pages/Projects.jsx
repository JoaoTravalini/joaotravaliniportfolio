import { memo, useMemo, useState } from "react"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"
import { getSafeExternalUrl } from "../utils/security.js"

const projectFilters = ['all', 'webFullstack', 'mobile', 'dataAi', 'software'];

const ProjectCard = memo(({ project, t }) => (
  <article className="project-card">
    <div className="project-image-frame">
      <img
        src={project.imageUrl}
        alt={project.name}
        className={`project-image ${project.imageFit === 'cover' ? 'project-image-cover' : ''}`}
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="mt-5 flex flex-col">
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
          {t.projects.recording}
          <img src={arrow} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
          <span className="sr-only">{t.projects.openRecording}</span>
        </a>
      )}
    </div>
  );
};

ProjectCard.displayName = 'ProjectCard';

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

      <div className="grid mt-12 mb-20 gap-12 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} t={t} key={project.repoLink || project.liveLink} />
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA t={t} />
    </section>
  )
}

export default Projects
