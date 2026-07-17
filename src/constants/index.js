import { asimovjr, eletrodenis, vail } from "../assets/images";
import {
    contact,
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    react,
    typescript
} from "../assets/icons";

export const skills = [
    {
        name: "C",
        shortName: "C",
        theme: "btn-back-blue",
    },
    {
        name: "C++",
        shortName: "C++",
        theme: "btn-back-black",
    },
    {
        imageUrl: css,
        name: "CSS3",
        theme: "btn-back-blue",
    },
    {
        name: "Dart",
        shortName: "Dart",
        theme: "btn-back-green",
    },
    {
        imageUrl: html,
        name: "HTML5",
        theme: "btn-back-orange",
    },
    {
        name: "Java",
        shortName: "Java",
        theme: "btn-back-red",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        theme: "btn-back-yellow",
    },
    {
        name: "Python",
        shortName: "Py",
        theme: "btn-back-blue",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        theme: "btn-back-blue",
    },
    {
        name: "Angular",
        shortName: "Ng",
        theme: "btn-back-red",
    },
    {
        name: "Apache Spark",
        shortName: "Spk",
        theme: "btn-back-orange",
    },
    {
        name: "Apache Kafka",
        shortName: "Kfk",
        theme: "btn-back-black",
    },
    {
        imageUrl: express,
        name: "Express.js",
        theme: "btn-back-green",
    },
    {
        name: "Flutter",
        shortName: "Fl",
        theme: "btn-back-blue",
    },
    {
        imageUrl: react,
        name: "React",
        theme: "btn-back-blue",
    },
    {
        name: "MySQL",
        shortName: "SQL",
        theme: "btn-back-yellow",
    },
    {
        name: "Neo4J",
        shortName: "N4J",
        theme: "btn-back-green",
    },
    {
        name: "Postgres",
        shortName: "Pg",
        theme: "btn-back-blue",
    },
    {
        name: "Prisma",
        shortName: "Pr",
        theme: "btn-back-black",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        theme: "btn-back-green",
    },
    {
        name: "VerilogHDL",
        shortName: "HDL",
        theme: "btn-back-pink",
    },
    {
        name: "FPGA",
        shortName: "FPGA",
        theme: "btn-back-yellow",
    },
    {
        name: "Embedded Systems",
        shortName: "EMB",
        theme: "btn-back-orange",
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
                    "Desenvolvimento de sites institucionais, sistemas web (Angular, React) e aplicativos mobile (Flutter, Dart).",
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
                    "Developed institutional websites, web systems (Angular, React), and mobile applications (Flutter, Dart).",
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
        link: 'https://github.com/JoaoTravalini',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        theme: 'btn-back-blue',
        shortName: 'NBA',
        repoLink: 'https://github.com/JoaoTravalini/projeto_python_2',
        tags: ['Python', 'Pandas', 'Scikit-learn', 'PCA', 'K-Means'],
        content: {
            pt: {
                name: 'Análise de dados NBA',
                description: 'Projeto em Python para análise de dados usando um dataset de estatísticas da NBA. Inclui PCA para redução de dimensionalidade, clusterização K-Means com avaliação do K ideal e notebook de análise de correlação. Dataset removido conforme exigido. Construído com NumPy, Pandas, Matplotlib e Scikit-learn.',
            },
            en: {
                name: 'NBA Data Analysis',
                description: 'Python project for data analysis using an NBA stats dataset. Includes PCA for dimensionality reduction, K-Means clustering with optimal K evaluation, and a correlation analysis notebook. Dataset excluded as required. Built with NumPy, Pandas, Matplotlib and Scikit-learn.',
            },
        },
    },
    {
        theme: 'btn-back-red',
        shortName: 'LP',
        repoLink: 'https://github.com/JoaoTravalini/loginpage',
        demoLink: 'https://drive.google.com/file/d/13BfyTgHKl9UJLliVg46s5Cp5J4Xsl1cx/view',
        tags: ['Angular', 'TypeScript', 'CSS'],
        content: {
            pt: {
                name: 'Página de login',
                description: 'Página de login desenvolvida com Angular e TypeScript para praticar o framework e suas linguagens. As folhas caindo no background foram feitas com apenas duas imagens e animadas com CSS.',
            },
            en: {
                name: 'Login Page',
                description: 'Login page built with Angular and TypeScript to practice the framework and its languages. The falling leaves in the background were created with only two images and animated with CSS.',
            },
        },
    },
    {
        theme: 'btn-back-green',
        shortName: 'APP',
        repoLink: 'https://github.com/JoaoTravalini/appdespesaspessoais',
        demoLink: 'https://drive.google.com/file/d/1MFqou7_WPynJjIy5-6iQrN6BOHECl9mw/view',
        tags: ['Flutter', 'Dart', 'Mobile'],
        content: {
            pt: {
                name: 'App de despesas pessoais',
                description: 'Aplicativo mobile para cadastro e visualização de despesas, desenvolvido com Flutter e Dart. O objetivo é praticar o uso do framework e das linguagens utilizadas.',
            },
            en: {
                name: 'Personal Expenses App',
                description: 'Mobile app for registering and viewing expenses, built with Flutter and Dart. The goal is to practice the framework and the languages used in the project.',
            },
        },
    },
    {
        theme: 'btn-back-yellow',
        shortName: 'CHAT',
        repoLink: 'https://github.com/JoaoTravalini/realtimechat',
        demoLink: 'https://drive.google.com/file/d/19qf698F1Qzh3lBBzyJwNvO5b-JzbGilH/view',
        tags: ['Angular', 'TypeScript', 'Socket.io'],
        content: {
            pt: {
                name: 'Chat em tempo real',
                description: 'Chat em tempo real para visualização de mensagens em dois navegadores ou abas diferentes, utilizando Angular, TypeScript e Socket.io. O objetivo é praticar o framework, as linguagens e as bibliotecas utilizadas.',
            },
            en: {
                name: 'Realtime Chat',
                description: 'Realtime chat for viewing messages in two different browsers or tabs, built with Angular, TypeScript and Socket.io. The goal is to practice the framework, languages and libraries used.',
            },
        },
    },
    {
        theme: 'btn-back-pink',
        shortName: 'PKX',
        repoLink: 'https://github.com/JoaoTravalini/pokedex',
        demoLink: 'https://drive.google.com/file/d/1lySm2I3GCtSge6VoE5bmNyiwJykB6ULM/view',
        tags: ['Angular', 'TypeScript', 'API'],
        content: {
            pt: {
                name: 'Pokédex',
                description: 'Pokédex para visualização dos Pokémons e suas habilidades, desenvolvida com Angular e TypeScript. O objetivo é praticar o uso do framework e das linguagens utilizadas.',
            },
            en: {
                name: 'Pokedex',
                description: 'Pokedex for viewing Pokemon and their abilities, built with Angular and TypeScript. The goal is to practice the framework and the languages used in the project.',
            },
        },
    },
    {
        theme: 'btn-back-green',
        shortName: 'ASI',
        liveLink: 'https://asimovjr.com.br',
        tags: ['WordPress', 'Institutional Website', 'Junior Enterprise'],
        content: {
            pt: {
                name: 'Site Asimov Jr.',
                description: 'Site institucional desenvolvido em WordPress para a Asimov Jr., empresa júnior de Computação. O projeto reúne informações sobre a empresa, serviços, projetos e canais de contato em uma presença digital profissional.',
            },
            en: {
                name: 'Asimov Jr. Website',
                description: 'Institutional website built with WordPress for Asimov Jr., a Computer Engineering junior enterprise. The project presents the company, services, projects, and contact channels through a professional digital presence.',
            },
        },
    },
    {
        theme: 'btn-back-black',
        shortName: 'ML',
        repoLink: 'https://github.com/JoaoTravalini/IaRegressaoClassificacao',
        tags: ['Machine Learning', 'Regression', 'Classification'],
        content: {
            pt: {
                name: 'IA: Regressão e Classificação',
                description: 'Projeto de Machine Learning para disciplina universitária, usando dois datasets públicos: um para regressão e outro para classificação. Inclui pré-processamento, análise exploratória, treinamento de modelos (Regressão Linear/Logística, Árvore de Decisão, SVM, MLP), avaliação e comparação.',
            },
            en: {
                name: 'AI Regression and Classification',
                description: 'Machine Learning project for university coursework, using two public datasets: one for regression and one for classification. Includes data preprocessing, exploratory analysis, model training (Linear/Logistic Regression, Decision Tree, SVM, MLP), evaluation and comparison.',
            },
        },
    }
];
