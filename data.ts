import { Project } from './types';

export const TOOLS = [
  "Power BI", "Python", "JavaScript", "SQL", "TypeScript", "HTML", "Microsoft Fabric", "Lovable", "Streamlit", "Pandas", "React", "DAX", "M Language", "Next.js", "Tailwind CSS", "Flask", "CSS", "Supabase", "PostgreSQL", "Zustand"
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "dashboard-ifood",
    title: "Dashboard Ifood",
    category: "Dashboard Power BI",
    company: "Ifood",
    description: "Análise completa de dados de restaurantes do iFood com visualizações interativas.",
    coverImage: "/images/original/Ifood-capa.png",
    context: "Este projeto foi desenvolvido como estudo de caso para demonstrar habilidades em análise de dados e visualização. O objetivo foi explorar padrões de mercado, distribuição geográfica e categorias de estabelecimentos, aplicando técnicas de ETL, modelagem de dados e construção de dashboards interativos.",
    dataset: "Os dataset foi desenvolvido de forma fictícia a partir de dados agregados do setor de delivery no período de novembro/2020 a fevereiro/2021 disponíveis no Kaggle. Os dados disponíveis incluem: categorias, taxas, localizações e faixa de preços. Além disso foi utilizado uma tabela com dados de municípios do IBGE para visualização espacial.",
    disclaimer: "Este é um projeto pessoal de portfólio, desenvolvido exclusivamente para fins educacionais e demonstração de competências técnicas. Os dados utilizados são públicos e não contêm informações comerciais sensíveis ou dados pessoais de clientes. Este projeto não possui qualquer vínculo, associação comercial ou endosso de empresas do setor.",
    tools: ["DAX", "M Language", "Power BI", "Microsoft Fabric"],
    images: [
      "/images/original/ifood-2.png",
      "/images/original/ifood-3.png",
      "/images/original/ifood-4.png",
      "/images/original/ifood-5.png"
    ],
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTNkMDllNmMtYWY5My00ZDAyLTk4MGQtMDhiODhhNWRlZWNjIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9&pageName=2c5103d0bbbaee24c701",
    featured: true
  },
  {
    id: "4",
    slug: "Dashboard-financeflow",
    title: "FinanceFlow Dashboard",
    category: "Web App",
    company: "Projeto pessoal",
    description: "Dashboard interativo para análise de dados financeiros consolidados.",
    coverImage: "/images/original/FF_CAPA.jpg",
    context: "Dashboard financeiro interativo desenvolvido em Python, voltado ao fechamento contábil, com interface moderna customizada via código e CSS. A solução centraliza indicadores financeiros, oferece filtros dinâmicos, upload de dados via Excel, integração via Google Sheets, exportação de relatórios em PDF, controle de acesso, controle de versionamento e relatórios autómicos gerados com IA, entregando uma visão executiva clara, segura e independente de ferramentas proprietárias.",
    tools: ["Python", "Pandas", "IA", "SQL","Google API"],
    images: [
      "/images/original/FF_1.jpg",
      "/images/original/FF_2.jpg",
      "/images/original/FF_3.jpg",
      "/images/original/FF_4.jpg",
      "/images/original/FF_5.jpg",
      "/images/original/FF_7.jpg",
      "/images/original/FF_8.jpg"
    ],
    //liveLink: "",
    //downloadableFiles: [
    //  {
     //   name: "Baixar Excel Modelo",
     //   url: "https://docs.google.com/spreadsheets/d/1dJgSf4iS-GdzWk4b3zS_FkwLdvqq_5FjhummuCNTruU/export?format=xlsx"
    //  }
    //],
    featured: true
  },
  {
    id: "5",
    slug: "site-farol-dev",
    title: "Site Farol Dev",
    category: "Site",
    company: "Farol Dev",
    description: "Website institucional moderno e escalável.",
    coverImage: "/images/original/Site-Farol-Dev-Capa.png",
    context: "Website institucional desenvolvido para a Farol Dev, com foco em apresentar a empresa, seus serviços e sua proposta de valor de forma clara, moderna e estratégica. A arquitetura do front-end foi pensada para escalabilidade, fácil manutenção e rápida implantação, com integração a fluxos de deploy contínuo em plataformas como Vercel, garantindo eficiência e confiabilidade em ambiente produtivo. O projeto foi construído com Next.js, React e Tailwind CSS, adotando princípios de UI/UX moderno, alta performance, responsividade e animações sutis para elevar a experiência do usuário.",
    tools: ["Next.js", "React", "Tailwind CSS"],
    images: [
      "/images/original/faroldev-1.png",
      "/images/original/faroldev-2.png",
      "/images/original/faroldev-3.png",
      "/images/original/faro2ldev-4.png"
    ],
    liveLink: "https://faroldev.com.br/",
    featured: true
  },
  {
    id: "7",
    slug: "afinador-pro",
    title: "Afinador PRO",
    category: "Web App",
    company: "Projeto pessoal",
    description: "Web App de um afinador de violão e guitarra.",
    coverImage: "/images/original/capa-afinador.png",
    context: "Aplicação web desenvolvida em Python com interface front-end interativa, projetada para auxiliar na afinação precisa do violão em tempo real. O sistema capta o áudio, identifica a frequência das cordas e fornece feedback visual claro e intuitivo, permitindo ajustes rápidos e precisos. A solução combina processamento de sinais no backend com uma experiência de uso simples e responsiva no front-end.",
    tools: ["Python", "React", "Tailwind CSS"],
    images: [
      "/images/original/afinador-1.png",
      "/images/original/afinador-2.png",
      "/images/original/Afinador-3.png",
      "/images/original/afinador-4.png"
    ],
    liveLink: "https://afinador-violao.vercel.app/",
    featured: true
  },
  {
    id: "8",
    slug: "zaya_tarot",
    title: "Zaya Tarot",
    category: "Web App",
    company: "Projeto pessoal",
    description: "Ferramenta web completa de jogos de tarot com IA integrada.",
    coverImage: "/images/original/ZAYA_CAPA.jpg",
    context: "Aplicação web full-stack desenvolvida como um SaaS, focada em experiências digitais de tiragem de tarot com automação, personalização e monetização recorrente. A plataforma permite a realização de jogadas virtuais, análises assistidas por IA, gestão de histórico por usuário e envio automatizado de mensagens diárias via WhatsApp. O sistema integra backend com processamento assíncrono, banco de dados relacional e APIs externas (IA, mensageria e pagamentos), combinados a um frontend moderno e responsivo, com controle de acesso freemium e paywall por assinatura. A arquitetura foi projetada para escalar usuários, interações e volume de dados de forma segura e performática.",
    features: [
  "Arquitetura Full-Stack SaaS - Frontend, backend e serviços desacoplados",
  "Banco de Dados Relacional - Modelagem de usuários, tiragens e histórico",
  "Manipulação SQL - Queries com filtros, joins e agregações",
  "Persistência por Usuário - Histórico de tiragens e análises salvas",
  "Integração com IA - Síntese automática das jogadas",
  "Cron Jobs - Envio diário de mensagens programadas",
  "API de WhatsApp - Disparo automático de imagem e texto",
  "Autenticação - Sessões e controle de acesso",
  "Paywall Freemium - Limitação de recursos por plano",
  "Assinaturas Recorrentes - Cobrança automática e webhooks",
  "Processamento Assíncrono - Tarefas em background",
  "Arquitetura Escalável - Preparado para crescimento"
]


,
    tools: ["Python","CSS", "JavaScript", "IA", "SQL"],
    images: [
      "/images/original/TT_1.jpg",
      "/images/original/TT_2.jpg",
      "/images/original/TT_3.jpg",
      "/images/original/TT_4.jpg", 
      "/images/original/TT_5.jpg", 
      "/images/original/TT_6.jpg", 
      "/images/original/TT_7.jpg", 
      "/images/original/TT_7-5.jpg", 
      
     







      
    ],
    liveLink: "https://zayatarot.com/",
    featured: true
  },
 // {
   // id: "9",
   // slug: "minha-biblioteca",
   // title: "Minha Biblioteca",
   // category: "Web App",
   // company: "Personal Project",
   // description: "Aplicação web moderna para catalogar e gerenciar sua biblioteca pessoal digital com sincronização em nuvem.",
   // coverImage: "/images/original/Minha-Biblioteca--Capa.png",
   // context: "Minha Biblioteca Pessoal é uma aplicação web moderna para catalogar e gerenciar livros de forma digital. O projeto foi desenvolvido para resolver o problema de controlar uma biblioteca pessoal de forma organizada, permitindo que você adicione livros manualmente, escaneie códigos de barras (ISBN), busque informações automáticas na API do Google Books e mantenha seus dados sincronizados na nuvem através do Supabase. A aplicação oferece uma experiência completa de gerenciamento de biblioteca, incluindo filtros por status de leitura, sistema de tags, anotações pessoais, avaliações e estatísticas detalhadas sobre seus hábitos de leitura. Com autenticação integrada, cada usuário tem acesso exclusivo aos seus próprios livros, com dados protegidos por Row Level Security. O sistema foi construído com foco em performance e responsividade, funcionando perfeitamente tanto em desktop quanto em dispositivos móveis, com um design moderno e intuitivo.",
   // features: [
   //   "Adicionar livros manualmente com formulário completo",
   //   "Buscar livros automaticamente pela API do Google Books",
   //   "Escanear código de barras (ISBN) com câmera",
   //   "Importar livros em lote via arquivo Excel",
   //   "Pesquisa por título, autor ou ISBN",
   //   "Filtro por status: Lendo, Lido, Quero Ler, Wishlist",
   //   "Sistema de tags customizáveis",
   //   "Avaliação com estrelas e anotações pessoais",
   //   "Dashboard com estatísticas de leitura",
   //   "Autenticação com email e senha",
   //   "Dados isolados por usuário (Row Level Security)",
  //    "Layout responsivo mobile-first",
  //    "Sincronização automática entre dispositivos"
  //  ],
  //  tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Zustand"],
   // images: [
  ///    "/images/original/paginabiblio1.png",
  //    "/images/original/paginabiblio2.png",
  //    "/images/original/paginabiblio3.png"
  //  ],
  //  liveLink: "https://app-estante-virtual.vercel.app/",
  //  featured: true
 // }
];
