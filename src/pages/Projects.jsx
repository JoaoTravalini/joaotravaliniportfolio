import { useState } from "react"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const projectFilters = ['all', 'webFullstack', 'mobile', 'dataAi', 'software'];

const Projects = ({ language, t }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const localizedProjects = projects.map(({ content, ...project }) => ({
    ...project,
    ...(content[language] || content.pt),
  }));

  const filteredProjects = activeFilter === 'all'
    ? localizedProjects
    : localizedProjects.filter((project) => project.category === activeFilter);

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
          <article className="project-card" key={project.repoLink || project.liveLink}>
            <div className="project-image-frame">
              <img
                src={project.imageUrl}
                alt={project.name}
                className={`project-image ${project.imageFit === 'cover' ? 'project-image-cover' : ''}`}
              />
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-3 text-slate-500">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={`${project.name}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 font-poppins">
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.projects.repository}
                    <img src={arrow} alt={t.projects.openRepository} className="w-4 h-4 object-contain" />
                  </a>
                )}

                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.projects.liveSite}
                    <img src={arrow} alt={t.projects.openLiveSite} className="w-4 h-4 object-contain" />
                  </a>
                )}

                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                    {t.projects.recording}
                    <img src={arrow} alt={t.projects.openRecording} className="w-4 h-4 object-contain" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <hr className="border-slate-200"/>

      <CTA t={t} />
    </section>
  )
}

export default Projects
