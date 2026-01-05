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
    coverImage: "/images/projects/dashboard-ifood/cover.png",
    context: "Ao estudar os pedidos no site do Ifood, percebi que seria possível extrair informações de todos os restaurantes usando a API do Ifood e alguns dados geoespaciais. O conjunto de dados contém informações sobre todos os restaurantes no iFood em fevereiro de 2021 e novembro de 2020. Os dados incluem nomes dos restaurantes, logotipos, categorias, taxas, localizações, faixa de preços e mais.",
    dataset: "Informações de fevereiro 2021 e novembro 2020 (nomes, logos, categorias, taxas, localizações, faixa de preços). Dados tratados para garantir anonimização de clientes sensíveis.",
    tools: ["DAX", "M Language", "Power BI", "Microsoft Fabric"],
    images: [
      "/images/projects/dashboard-ifood/gallery-1.png",
      "/images/projects/dashboard-ifood/gallery-2.png",
      "/images/projects/dashboard-ifood/gallery-3.png",
      "/images/projects/dashboard-ifood/gallery-4.png"
    ],
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTNkMDllNmMtYWY5My00ZDAyLTk4MGQtMDhiODhhNWRlZWNjIiwidCI6IjdlOTNlMjg2LWIyOWEtNDQ1NC1hNDFhLWU4NDE5ZWM5ZGViNSJ9&pageName=2c5103d0bbbaee24c701",
    featured: true
  },
  {
    id: "4",
    slug: "relatorio-financeiro-consolidado",
    title: "Relatório Financeiro Consolidado",
    category: "Web App",
    company: "Startup FinTech",
    description: "Dashboard interativo para análise de dados financeiros consolidados (DRE).",
    coverImage: "/images/projects/relatorio-financeiro-consolidado/cover.png",
    context: "Dashboard financeiro interativo desenvolvido em Python com Streamlit, voltado ao fechamento contábil, com interface moderna customizada via código e CSS. A solução centraliza indicadores financeiros, oferece filtros dinâmicos, upload de dados via Excel, exportação de relatórios em PDF e controle de acesso, entregando uma visão executiva clara, segura e independente de ferramentas proprietárias.",
    tools: ["Python", "Pandas", "Streamlit", "Google AI Studio"],
    images: [
      "/images/projects/relatorio-financeiro-consolidado/gallery-1.png"
    ],
    liveLink: "https://dashboard-contabil.vercel.app/",
    downloadableFiles: [
      {
        name: "Baixar Excel Modelo",
        url: "https://docs.google.com/spreadsheets/d/1dJgSf4iS-GdzWk4b3zS_FkwLdvqq_5FjhummuCNTruU/export?format=xlsx"
      }
    ],
    featured: true
  },
  {
    id: "5",
    slug: "site-farol-dev",
    title: "Site Farol Dev",
    category: "Site",
    company: "Farol Dev",
    description: "Website institucional moderno e escalável.",
    coverImage: "/images/projects/site-farol-dev/cover.png",
    context: "Website institucional desenvolvido para a Farol Dev, com foco em apresentar a empresa, seus serviços e sua proposta de valor de forma clara, moderna e estratégica. A arquitetura do front-end foi pensada para escalabilidade, fácil manutenção e rápida implantação, com integração a fluxos de deploy contínuo em plataformas como Vercel, garantindo eficiência e confiabilidade em ambiente produtivo. O projeto foi construído com Next.js, React e Tailwind CSS, adotando princípios de UI/UX moderno, alta performance, responsividade e animações sutis para elevar a experiência do usuário.",
    tools: ["Next.js", "React", "Tailwind CSS"],
    images: [
      "/images/projects/site-farol-dev/gallery-1.png",
      "/images/projects/site-farol-dev/gallery-2.png",
      "/images/projects/site-farol-dev/gallery-3.png",
      "/images/projects/site-farol-dev/gallery-4.png"
    ],
    liveLink: "https://farol-dev-moc.vercel.app/",
    featured: true
  },
  {
    id: "7",
    slug: "afinador-pro",
    title: "Afinador PRO",
    category: "Web App",
    company: "Personal Project",
    description: "Web App de um afinador de violão e guitarra.",
    coverImage: "/images/projects/afinador-pro/cover.png",
    context: "Aplicação web desenvolvida em Python com interface front-end interativa, projetada para auxiliar na afinação precisa do violão em tempo real. O sistema capta o áudio, identifica a frequência das cordas e fornece feedback visual claro e intuitivo, permitindo ajustes rápidos e precisos. A solução combina processamento de sinais no backend com uma experiência de uso simples e responsiva no front-end.",
    tools: ["Python", "React", "Tailwind CSS"],
    images: [
      "/images/projects/afinador-pro/gallery-1.png",
      "/images/projects/afinador-pro/gallery-2.png",
      "/images/projects/afinador-pro/gallery-3.png",
      "/images/projects/afinador-pro/gallery-4.png"
    ],
    liveLink: "https://afinador-violao.vercel.app/",
    featured: true
  },
  {
    id: "8",
    slug: "pdf-master",
    title: "PDF Master",
    category: "Web App",
    company: "Personal Project",
    description: "Ferramenta web completa para edição e manipulação de arquivos PDF com múltiplas funcionalidades de transformação.",
    coverImage: "/images/projects/pdf-master/cover.png",
    context: "Aplicação web full-stack desenvolvida em Python com Flask, projetada para facilitar a manipulação profissional de documentos PDF de forma intuitiva e eficiente. O sistema oferece funcionalidades essenciais como mesclar múltiplos PDFs, extrair páginas específicas, dividir documentos, rotacionar páginas e comprimir arquivos. A solução combina processamento robusto de PDFs no backend utilizando PyPDF2 com uma interface front-end moderna e responsiva em HTML/CSS/JavaScript, proporcionando uma experiência fluida sem necessidade de instalação de software adicional. Todo o processamento é feito em memória, garantindo privacidade e rapidez nas operações.",
    features: [
      "Mesclar PDFs - Combina múltiplos arquivos PDF em um único documento mantendo a ordem",
      "Extrair Páginas - Seleciona e extrai intervalos específicos de páginas de qualquer PDF",
      "Dividir PDF - Separa cada página de um documento em arquivos individuais",
      "Rotacionar Páginas - Aplica rotação de 90°, 180° ou 270° em todas as páginas",
      "Comprimir PDF - Reduz o tamanho do arquivo removendo metadados e otimizando streams",
      "Interface Drag & Drop - Upload intuitivo de arquivos arrastando para a área designada",
      "Preview de Arquivos - Visualização dos nomes e quantidade de arquivos selecionados",
      "Download Automático - Resultado processado disponibilizado instantaneamente"
    ],
    tools: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    images: [
      "/images/projects/pdf-master/gallery-1.png",
      "/images/projects/pdf-master/gallery-2.png"
    ],
    liveLink: "https://webapp-pdf.vercel.app/",
    featured: true
  },
  {
    id: "9",
    slug: "minha-biblioteca",
    title: "Minha Biblioteca",
    category: "Web App",
    company: "Personal Project",
    description: "Aplicação web moderna para catalogar e gerenciar sua biblioteca pessoal digital com sincronização em nuvem.",
    coverImage: "/images/projects/minha-biblioteca/cover.png",
    context: "Minha Biblioteca Pessoal é uma aplicação web moderna para catalogar e gerenciar livros de forma digital. O projeto foi desenvolvido para resolver o problema de controlar uma biblioteca pessoal de forma organizada, permitindo que você adicione livros manualmente, escaneie códigos de barras (ISBN), busque informações automáticas na API do Google Books e mantenha seus dados sincronizados na nuvem através do Supabase. A aplicação oferece uma experiência completa de gerenciamento de biblioteca, incluindo filtros por status de leitura, sistema de tags, anotações pessoais, avaliações e estatísticas detalhadas sobre seus hábitos de leitura. Com autenticação integrada, cada usuário tem acesso exclusivo aos seus próprios livros, com dados protegidos por Row Level Security. O sistema foi construído com foco em performance e responsividade, funcionando perfeitamente tanto em desktop quanto em dispositivos móveis, com um design moderno e intuitivo.",
    features: [
      "Adicionar livros manualmente com formulário completo",
      "Buscar livros automaticamente pela API do Google Books",
      "Escanear código de barras (ISBN) com câmera",
      "Importar livros em lote via arquivo Excel",
      "Pesquisa por título, autor ou ISBN",
      "Filtro por status: Lendo, Lido, Quero Ler, Wishlist",
      "Sistema de tags customizáveis",
      "Avaliação com estrelas e anotações pessoais",
      "Dashboard com estatísticas de leitura",
      "Autenticação com email e senha",
      "Dados isolados por usuário (Row Level Security)",
      "Layout responsivo mobile-first",
      "Sincronização automática entre dispositivos"
    ],
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Zustand"],
    images: [
      "/images/projects/minha-biblioteca/gallery-1.png",
      "/images/projects/minha-biblioteca/gallery-2.png",
      "/images/projects/minha-biblioteca/gallery-3.png"
    ],
    liveLink: "https://app-estante-virtual.vercel.app/",
    featured: true
  }
];
