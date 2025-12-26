import { Project } from './types';

export const TOOLS = [
  "Power BI", "Python", "JavaScript", "SQL", "TypeScript", "HTML", "Microsoft Fabric", "Lovable", "Streamlit", "Pandas", "React", "DAX", "M Language", "Next.js", "Tailwind CSS"
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "dashboard-ifood",
    title: "Dashboard Ifood",
    category: "Dashboard Power BI",
    company: "Ifood",
    description: "Análise completa de dados de restaurantes do iFood com visualizações interativas.",
    coverImage: "https://i.imgur.com/RIblcRC.png",
    context: "Ao estudar os pedidos no site do Ifood, percebi que seria possível extrair informações de todos os restaurantes usando a API do Ifood e alguns dados geoespaciais. O conjunto de dados contém informações sobre todos os restaurantes no iFood em fevereiro de 2021 e novembro de 2020. Os dados incluem nomes dos restaurantes, logotipos, categorias, taxas, localizações, faixa de preços e mais.",
    dataset: "Informações de fevereiro 2021 e novembro 2020 (nomes, logos, categorias, taxas, localizações, faixa de preços). Dados tratados para garantir anonimização de clientes sensíveis.",
    tools: ["DAX", "M Language", "Power BI", "Microsoft Fabric"],
    images: [
      "https://i.imgur.com/VL9XCVG.png",
      "https://i.imgur.com/5s6QlvV.png",
      "https://i.imgur.com/tH8Pj3C.png",
      "https://i.imgur.com/FsgvUdl.png"
    ],
    featured: true
  },
  {
    id: "4",
    slug: "relatorio-financeiro-consolidado",
    title: "Relatório Financeiro Consolidado",
    category: "Web App",
    company: "Startup FinTech",
    description: "Dashboard interativo para análise de dados financeiros consolidados (DRE).",
    coverImage: "https://i.imgur.com/ZpTk2Ik.png",
    context: "Dashboard financeiro interativo desenvolvido em Python com Streamlit, voltado ao fechamento contábil, com interface moderna customizada via código e CSS. A solução centraliza indicadores financeiros, oferece filtros dinâmicos, upload de dados via Excel, exportação de relatórios em PDF e controle de acesso, entregando uma visão executiva clara, segura e independente de ferramentas proprietárias.",
    tools: ["Python", "Pandas", "Streamlit", "Google AI Studio"],
    images: [
      "https://i.imgur.com/w6wvRNS.png",
      "https://i.imgur.com/P1aNapK.png"
    ],
    liveLink: "https://dashboard-contabil.vercel.app/",
    featured: true
  },
  {
    id: "5",
    slug: "site-farol-dev",
    title: "Site Farol Dev",
    category: "Site",
    company: "Farol Dev",
    description: "Website institucional moderno e escalável.",
    coverImage: "https://i.imgur.com/vPaFzNV.png",
    context: "Website institucional desenvolvido para a Farol Dev, com foco em apresentar a empresa, seus serviços e sua proposta de valor de forma clara, moderna e estratégica. A arquitetura do front-end foi pensada para escalabilidade, fácil manutenção e rápida implantação, com integração a fluxos de deploy contínuo em plataformas como Vercel, garantindo eficiência e confiabilidade em ambiente produtivo. O projeto foi construído com Next.js, React e Tailwind CSS, adotando princípios de UI/UX moderno, alta performance, responsividade e animações sutis para elevar a experiência do usuário.",
    tools: ["Next.js", "React", "Tailwind CSS"],
    images: [
      "https://i.imgur.com/s2mSQcx.png",
      "https://i.imgur.com/sc2LUqc.png",
      "https://i.imgur.com/RbznGwO.png",
      "https://i.imgur.com/l25IlpL.png"
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
    coverImage: "https://i.imgur.com/jyETOq9.png",
    context: "Aplicação web desenvolvida em Python com interface front-end interativa, projetada para auxiliar na afinação precisa do violão em tempo real. O sistema capta o áudio, identifica a frequência das cordas e fornece feedback visual claro e intuitivo, permitindo ajustes rápidos e precisos. A solução combina processamento de sinais no backend com uma experiência de uso simples e responsiva no front-end.",
    tools: ["Python", "React", "Tailwind CSS"],
    images: [
      "https://i.imgur.com/aLETIjq.png",
      "https://i.imgur.com/AGRJaS4.png",
      "https://i.imgur.com/i42clg4.png"
    ],
    liveLink: "https://afinador-violao.vercel.app/",
    featured: true
  }
];
