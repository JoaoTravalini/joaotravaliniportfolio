import { asimovjr, eletrodenis, vail } from "../assets/images";
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
        company_name: "EletroDenis LTDA",
        icon: eletrodenis,
        iconBg: "#f7e1df",
        content: {
            pt: {
                title: "Estagiário Técnico em Eletrônica",
                date: "Jan 2022 - Set 2022",
                points: [
                    "Realização de manutenção e reparo em equipamentos eletrônicos, como televisores, caixas de som e outros dispositivos.",
                    "Diagnóstico de falhas em circuitos eletrônicos e substituição de componentes danificados.",
                    "Auxílio na montagem, testes e ajustes de equipamentos eletrônicos.",
                    "Uso de ferramentas e instrumentos de medição, como multímetro, para análise de circuitos.",
                ],
            },
            en: {
                title: "Electronics Technician Intern",
                date: "Jan 2022 - Sep 2022",
                points: [
                    "Performed maintenance and repairs on electronic equipment, including TVs, speakers, and other devices.",
                    "Diagnosed faults in electronic circuits and replaced damaged components.",
                    "Assisted with assembly, testing, and adjustment of electronic equipment.",
                    "Used measurement tools and instruments, such as a multimeter, to analyze circuits.",
                ],
            },
        },
    },
    {
        company_name: "Asimov Jr.",
        icon: asimovjr,
        iconBg: "#d0eaf5",
        content: {
            pt: {
                title: "Gerente de projetos",
                date: "Nov 2023 - Jun 2025",
                points: [
                    "Gerenciamento de projetos de desenvolvimento, incluindo planejamento, definição de escopo e acompanhamento de prazos.",
                    "Divisão e organização de tarefas entre membros da equipe, garantindo fluxo de trabalho eficiente.",
                    "Comunicação com clientes para levantamento de requisitos e alinhamento de expectativas.",
                    "Desenvolvimento de sites institucionais, sistemas web (Angular, React) e aplicativos mobile (Flutter, dart).",
                    "Criação de protótipos e interfaces para validação de ideias e melhoria da experiência do usuário.",
                    "Acompanhamento do progresso das entregas e garantia da qualidade dos projetos.",
                ],
            },
            en: {
                title: "Project Manager",
                date: "Nov 2023 - Jun 2025",
                points: [
                    "Managed development projects, including planning, scope definition, and deadline tracking.",
                    "Divided and organized tasks among team members, ensuring an efficient workflow.",
                    "Communicated with clients to gather requirements and align expectations.",
                    "Developed institutional websites, web systems (Angular, React), and mobile applications (Flutter, dart).",
                    "Created prototypes and interfaces to validate ideas and improve the user experience.",
                    "Monitored delivery progress and ensured project quality.",
                ],
            },
        },
    },
    {
        company_name: "Vail resorts - The overlook",
        icon: vail,
        iconBg: "#b7e4c7",
        content: {
            pt: {
                title: "F&B Support",
                date: "Dez 2025 - Mar 2026",
                points: [
                    "Atendimento ao público em áreas de grande fluxo em resort de ski nos Estados Unidos (Breckenridge, Colorado), utilizando exclusivamente o idioma inglês.",
                    "Operação de caixa, realizando registro de pedidos, processamento de pagamentos e controle de transações.",
                    "Reposição e organização de materiais como copos, talheres e utensílios em áreas de atendimento.",
                    "Suporte aos clientes, esclarecendo dúvidas e proporcionando uma experiência positiva.",
                ],
            },
            en: {
                title: "F&B Support",
                date: "Dec 2025 - Mar 2026",
                points: [
                    "Served guests in high-traffic areas at a ski resort in the United States (Breckenridge, Colorado), using English exclusively.",
                    "Operated the cash register, recording orders, processing payments, and managing transactions.",
                    "Restocked and organized supplies such as cups, cutlery, and utensils in service areas.",
                    "Supported guests by answering questions and creating a positive experience.",
                ],
            },
        },
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
        link: 'https://github.com/adrianhajdin/pricewise',
        content: {
            pt: {
                name: 'Amazon Price Tracker',
                description: 'Desenvolvi uma aplicação web que monitora produtos na Amazon e notifica usuários sobre mudanças de preço, ajudando a encontrar as melhores ofertas.',
            },
            en: {
                name: 'Amazon Price Tracker',
                description: 'Developed a web application that tracks Amazon products and notifies users of price changes, helping them find the best deals.',
            },
        },
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        link: 'https://github.com/adrianhajdin/threads',
        content: {
            pt: {
                name: 'Clone Full Stack do Threads',
                description: 'Criei uma réplica full stack da plataforma de discussões Threads, permitindo que usuários publiquem e interajam em conversas encadeadas.',
            },
            en: {
                name: 'Full Stack Threads Clone',
                description: 'Created a full-stack replica of the discussion platform Threads, enabling users to post and engage in threaded conversations.',
            },
        },
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
        content: {
            pt: {
                name: 'Aplicativo de busca de carros',
                description: 'Projetei e construí um aplicativo para encontrar e comparar carros no mercado, simplificando o processo de compra.',
            },
            en: {
                name: 'Car Finding App',
                description: 'Designed and built an app for finding and comparing cars on the market, streamlining the car-buying process.',
            },
        },
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        link: 'https://github.com/adrianhajdin/social_media_app',
        content: {
            pt: {
                name: 'Clone Full Stack do Instagram',
                description: 'Construí um clone completo do Instagram, permitindo que usuários compartilhem fotos e se conectem em uma experiência familiar de rede social.',
            },
            en: {
                name: 'Full Stack Instagram Clone',
                description: 'Built a complete Instagram clone, allowing users to share photos and connect with friends in a familiar social media environment.',
            },
        },
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        link: 'https://github.com/adrianhajdin/projects_realestate',
        content: {
            pt: {
                name: 'Aplicação imobiliária',
                description: 'Desenvolvi uma aplicação web para listagens imobiliárias, facilitando a busca por propriedades e a conexão entre compradores e vendedores.',
            },
            en: {
                name: 'Real-Estate Application',
                description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
            },
        },
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
        content: {
            pt: {
                name: 'Aplicação de resumo com IA',
                description: 'Aplicação que usa IA para gerar automaticamente resumos concisos e informativos a partir de textos longos ou artigos.',
            },
            en: {
                name: 'AI Summarizer Application',
                description: 'App that leverages AI to automatically generate concise and informative summaries from lengthy text content or blog posts.',
            },
        },
    }
];
