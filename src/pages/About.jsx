import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';

import CTA from '../components/CTA.jsx'

const About = ({ language, t }) => {
  const localizedExperiences = experiences.map(({ content, ...experience }) => ({
    ...experience,
    ...(content[language] || content.pt),
  }));

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

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon-tile">
                {skill.imageUrl ? (
                  <img src={skill.imageUrl} alt={skill.name} className="w-8 h-8 object-contain" />
                ) : (
                  <span className="skill-initials">{skill.shortName}</span>
                )}
              </div>
              <p className="skill-name">{skill.name}</p>
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
              <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={<div className="flex justify-center items-center w-full h-full"><img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" /></div>} iconStyle={{ background: experience.iconBg }} contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none',}}>
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
