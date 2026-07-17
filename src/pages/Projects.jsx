import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = ({ language, t }) => {
  const localizedProjects = projects.map(({ content, ...project }) => ({
    ...project,
    ...(content[language] || content.pt),
  }));

  return (
    <section className="max-container">
      <h1 className="head-text">
        {t.projects.titlePrefix} <span className="blue-gradient_text font-semibold drop-shadow">{t.projects.titleHighlight}</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t.projects.intro}</p>
      </div>

      <div className="grid my-20 gap-12 md:grid-cols-2">
        {localizedProjects.map((project) => (
          <article className="project-card" key={project.repoLink || project.liveLink}>
            <div className="project-icon-tile">
              <span className="project-initials">{project.shortName}</span>
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
