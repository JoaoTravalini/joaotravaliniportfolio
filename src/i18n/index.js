export const languages = [
  {
    code: 'pt',
    htmlLang: 'pt-BR',
    name: 'Português',
    shortName: 'PT',
    flagClass: 'flag-br',
  },
  {
    code: 'en',
    htmlLang: 'en-US',
    name: 'English',
    shortName: 'EN',
    flagClass: 'flag-us',
  },
];

export const translations = {
  pt: {
    meta: {
      siteName: 'João Travalini',
      title: 'João Travalini | Desenvolvedor Full-stack e Engenheiro de Computação',
      description: 'Portfólio de João Travalini, desenvolvedor com projetos em React, TypeScript, Angular, Flutter, Python, Machine Learning, bancos de dados e sistemas embarcados.',
      pages: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
      },
      descriptions: {
        home: 'Portfólio de João Travalini com experiências, habilidades e projetos em desenvolvimento web, dados, mobile e sistemas embarcados.',
        about: 'Conheça a trajetória, experiências profissionais e habilidades técnicas de João Travalini.',
        projects: 'Projetos reais e acadêmicos de João Travalini em web, full-stack, mobile, dados, IA e software.',
        contact: 'Entre em contato com João Travalini para oportunidades profissionais, projetos ou colaboração.',
      },
    },
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      homeLabel: 'Ir para a página inicial',
      github: 'Abrir GitHub de João Travalini',
    },
    languageSwitcher: {
      label: 'Selecionar idioma',
      changeTo: {
        pt: 'Traduzir site para português',
        en: 'Translate site to English',
      },
    },
    home: {
      introGreeting: 'Olá, eu sou',
      role: 'Engenheiro de computação',
      hint: 'Clique e arraste para explorar a ilha',
      soundToggle: 'Alternar música de fundo',
      stages: {
        2: {
          text: 'Construí uma base sólida por meio de experiências profissionais e projetos práticos, principalmente atuando em empresa júnior e trabalhos freelance.',
          btnText: 'Saiba mais',
        },
        3: {
          text: 'Liderei múltiplos projetos ao sucesso ao longo dos anos. Curioso sobre o impacto?',
          btnText: 'Ver portfólio',
        },
        4: {
          text: 'Precisa de um projeto ou deseja entrar em contato?',
          btnText: 'Entrar em contato',
        },
      },
    },
    about: {
      greeting: 'Olá, eu sou',
      summary: 'Engenheiro de Computação brasileiro, focado no desenvolvimento de aplicações modernas e na criação de soluções inovadoras por meio de projetos práticos.',
      skillsTitle: 'Minhas habilidades',
      skillGroups: {
        languages: 'Linguagens',
        frontendMobile: 'Front-end e mobile',
        backendData: 'Back-end, dados e mensageria',
        databases: 'Bancos de dados',
        hardware: 'Hardware e sistemas embarcados',
      },
      experienceTitle: 'Experiência profissional',
      experienceIntro: 'Tive diversas experiências profissionais e desenvolvi minhas habilidades por meio de projetos práticos, colaborando com diferentes pessoas e contextos. Aqui está um resumo:',
    },
    projects: {
      titlePrefix: 'Meus',
      titleHighlight: 'projetos',
      intro: 'Aqui estão alguns dos projetos que desenvolvi para praticar análise de dados, machine learning, desenvolvimento web, mobile e aplicações em tempo real. Alguns possuem gravações salvas no Drive para mostrar o projeto funcionando.',
      repository: 'Repositório',
      liveSite: 'Site',
      recording: 'Gravação',
      technologiesLabel: 'Tecnologias utilizadas',
      openRepository: 'Abrir repositório',
      openLiveSite: 'Abrir site',
      openRecording: 'Abrir gravação do projeto',
      filterLabel: 'Filtrar projetos por categoria',
      filters: {
        all: 'Todos',
        webFullstack: 'Web e Full-stack',
        mobile: 'Mobile',
        dataAi: 'Dados e IA',
        software: 'Software',
      },
    },
    contact: {
      title: 'Entre em contato',
      nameLabel: 'Nome',
      namePlaceholder: 'Nome',
      emailLabel: 'E-mail',
      emailPlaceholder: 'E-mail',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Digite aqui...',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Algo deu errado',
      validation: {
        invalid: 'Revise os campos antes de enviar.',
        cooldown: 'Aguarde alguns segundos antes de enviar novamente.',
      },
    },
    cta: {
      text: 'Tem um projeto em mente ou deseja entrar em contato?',
      button: 'Entrar em contato',
    },
    alert: {
      success: 'Sucesso',
      failed: 'Falhou',
    },
    common: {
      arrowAlt: 'seta',
      loading: 'Carregando página',
    },
  },
  en: {
    meta: {
      siteName: 'João Travalini',
      title: 'João Travalini | Full-stack Developer and Computer Engineer',
      description: 'Portfolio of João Travalini, a developer with projects in React, TypeScript, Angular, Flutter, Python, Machine Learning, databases, and embedded systems.',
      pages: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
      descriptions: {
        home: 'João Travalini portfolio with experience, skills, and projects in web development, data, mobile, and embedded systems.',
        about: 'Learn about João Travalini career path, professional experience, and technical skills.',
        projects: 'Real and academic projects by João Travalini across web, full-stack, mobile, data, AI, and software.',
        contact: 'Contact João Travalini for professional opportunities, projects, or collaboration.',
      },
    },
    nav: {
      about: 'About',
      projects: 'Projects',
      homeLabel: 'Go to home page',
      github: 'Open João Travalini GitHub',
    },
    languageSwitcher: {
      label: 'Select language',
      changeTo: {
        pt: 'Traduzir site para português',
        en: 'Translate site to English',
      },
    },
    home: {
      introGreeting: "Hi, I'm",
      role: 'Computer Engineer',
      hint: 'Click and drag to explore the island',
      soundToggle: 'Toggle background music',
      stages: {
        2: {
          text: 'I built a solid foundation through professional experiences and practical projects, mainly working in a junior enterprise and freelance projects.',
          btnText: 'Learn more',
        },
        3: {
          text: 'I have led multiple projects to success over the years. Curious about the impact?',
          btnText: 'View portfolio',
        },
        4: {
          text: 'Need a project or want to get in touch?',
          btnText: 'Contact me',
        },
      },
    },
    about: {
      greeting: "Hi, I'm",
      summary: 'Brazilian Computer Engineer focused on building modern applications and creating innovative solutions through practical projects.',
      skillsTitle: 'My skills',
      skillGroups: {
        languages: 'Languages',
        frontendMobile: 'Front-end and mobile',
        backendData: 'Back-end, data and messaging',
        databases: 'Databases',
        hardware: 'Hardware and embedded systems',
      },
      experienceTitle: 'Professional experience',
      experienceIntro: 'I have gained professional experience and developed my skills through practical projects, collaborating with different people and contexts. Here is a summary:',
    },
    projects: {
      titlePrefix: 'My',
      titleHighlight: 'projects',
      intro: 'Here are some of the projects I built to practice data analysis, machine learning, web development, mobile development, and realtime applications. Some include Drive recordings showing the project in action.',
      repository: 'Repository',
      liveSite: 'Website',
      recording: 'Recording',
      technologiesLabel: 'Technologies used',
      openRepository: 'Open repository',
      openLiveSite: 'Open website',
      openRecording: 'Open project recording',
      filterLabel: 'Filter projects by category',
      filters: {
        all: 'All',
        webFullstack: 'Web and Full-stack',
        mobile: 'Mobile',
        dataAi: 'Data and AI',
        software: 'Software',
      },
    },
    contact: {
      title: 'Get in touch',
      nameLabel: 'Name',
      namePlaceholder: 'Name',
      emailLabel: 'Email',
      emailPlaceholder: 'Email',
      messageLabel: 'Message',
      messagePlaceholder: 'Type here...',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Something went wrong',
      validation: {
        invalid: 'Please review the fields before sending.',
        cooldown: 'Please wait a few seconds before sending again.',
      },
    },
    cta: {
      text: 'Have a project in mind or want to get in touch?',
      button: 'Contact me',
    },
    alert: {
      success: 'Success',
      failed: 'Failed',
    },
    common: {
      arrowAlt: 'arrow',
      loading: 'Loading page',
    },
  },
};
