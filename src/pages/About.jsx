import { useMemo } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';

import CTA from '../components/CTA.jsx'

const skillGroupDefinitions = [
  {
    id: 'languages',
    skills: ['C', 'C++', 'Dart', 'Java', 'JavaScript', 'Python', 'TypeScript', 'VerilogHDL'],
  },
  {
    id: 'frontendMobile',
    skills: ['HTML5', 'CSS3', 'Angular', 'Flutter', 'React'],
  },
  {
    id: 'backendData',
    skills: ['Express.js', 'Apache Spark', 'Apache Kafka'],
  },
  {
    id: 'databases',
    skills: ['MySQL', 'Neo4J', 'Postgres', 'Prisma', 'MongoDB'],
  },
  {
    id: 'hardware',
    skills: ['FPGA', 'Embedded Systems'],
  },
];

const About = ({ language, t }) => {
  const localizedExperiences = useMemo(
    () => experiences.map(({ content, ...experience }) => ({
      ...experience,
      ...(content[language] || content.pt),
    })),
    [language]
  );

  const groupedSkills = useMemo(
    () => skillGroupDefinitions.map((group) => ({
      ...group,
      title: t.about.skillGroups[group.id],
      skills: group.skills
        .map((skillName) => skills.find((skill) => skill.name === skillName))
        .filter(Boolean),
    })),
    [t]
  );

  return (
    <section className="max-container">
      <h1 className="head-text">
        {t.about.greeting} <span className="blue-gradient_text font-semibold drop-shadow">João Travalini</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t.about.summary}</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">{t.about.skillsTitle}</h3>

        <div className="mt-12 flex flex-col gap-8">
          {groupedSkills.map((group) => (
            <div className="skill-group" key={group.id}>
              <h4 className="skill-group-title">{group.title}</h4>
              <div className="skill-grid">
                {group.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-icon-tile">
                      {skill.imageUrl ? (
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className="h-8 w-8 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="skill-initials">{skill.shortName}</span>
                      )}
                    </div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">{t.about.experienceTitle}</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t.about.experienceIntro}</p>
        </div>
        
        <div className="mt-12 flex">
          <VerticalTimeline>
            {localizedExperiences.map((experience) => (
              <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={<div className="flex justify-center items-center w-full h-full"><img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" loading="lazy" decoding="async" /></div>} iconStyle={{ background: experience.iconBg }} contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none',}}>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>
      <CTA t={t} />
    </section>
  )
}

export default About
