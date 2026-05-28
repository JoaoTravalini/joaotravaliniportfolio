import { meta, shopify, starbucks, tesla, asimovjr, eletrodenis, vail } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Estagiário Técnico em Eletrônica",
        company_name: "EletroDenis LTDA",
        icon: eletrodenis,
        iconBg: "#f7e1df",
        date: "Jan 2022 - Set 2022",
        points: [
            "Realização de manutenção e reparo em equipamentos eletrônicos, como televisores, caixas de som e outros dispositivos.",
            "Diagnóstico de falhas em circuitos eletrônicos e substituição de componentes danificados.",
            "Auxílio na montagem, testes e ajustes de equipamentos eletrônicos.",
            "Uso de ferramentas e instrumentos de medição, como multímetro, para análise de circuitos.",
        ],
    },
    {
        title: "Gerente de projetos",
        company_name: "Asimov Jr.",
        icon: asimovjr,
        iconBg: "#d0eaf5",
        date: "Nov 2023 - Jun 2025",
        points: [
            "Gerenciamento de projetos de desenvolvimento, incluindo planejamento, definição de escopo e acompanhamento de prazos.",
            "Divisão e organização de tarefas entre membros da equipe, garantindo fluxo de trabalho eficiente.",
            "Comunicação com clientes para levantamento de requisitos e alinhamento de expectativas.",
            "Desenvolvimento de sites institucionais, sistemas web e aplicativos mobile.",
            "Criação de protótipos e interfaces para validação de ideias e melhoria da experiência do usuário.",
            "Acompanhamento do progresso das entregas e garantia da qualidade dos projetos.",
        ],
    },
    {
        title: "F&B Support",
        company_name: "Vail resorts - The overlook",
        icon: vail,
        iconBg: "#b7e4c7",
        date: "Dez 2025 - Mar 2026",
        points: [
            "Atendimento ao público em áreas de grande fluxo em resort de ski nos Estados Unidos (Breckenridge, Colorado), utilizando exclusivamente o idioma inglês.",
            "Operação de caixa, realizando registro de pedidos, processamento de pagamentos e controle de transações.",
            "Reposição e organização de materiais como copos, talheres e utensílios em áreas de atendimento.",,
            "Suporte aos clientes, esclarecendo dúvidas e proporcionando uma experiência positiva."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];