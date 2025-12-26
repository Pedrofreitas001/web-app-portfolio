import { Project } from './types';

export const TOOLS = [
  "Power BI", "Python", "JavaScript", "SQL", "TypeScript", "HTML", "Microsoft Fabric", "Lovable", "Streamlit", "Pandas", "React"
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "dashboard-ifood",
    title: "Dashboard Ifood",
    category: "Dashboard Power BI",
    company: "Ifood",
    description: "Análise de performance logística e distribuição de pedidos em tempo real.",
    coverImage: "https://picsum.photos/id/48/800/600",
    context: "Extração de dados de restaurantes usando API do Ifood e dados geoespaciais para entender o comportamento de pedidos em diferentes regiões. O objetivo principal foi identificar gargalos na entrega e oportunidades de expansão para parceiros logísticos.",
    dataset: "Informações de fevereiro 2021 e novembro 2020 (nomes, logos, categorias, taxas, localizações, faixa de preços). Dados tratados para garantir anonimização de clientes sensíveis.",
    tools: ["Power BI", "Python", "Microsoft Fabric", "DAX"],
    images: [
      "https://picsum.photos/id/48/1200/800",
      "https://picsum.photos/id/20/1200/800",
      "https://picsum.photos/id/1/1200/800"
    ],
    featured: true
  },
  {
    id: "2",
    slug: "dashboard-next",
    title: "Dashboard Web Next.js",
    category: "Web Development",
    company: "Personal Project",
    description: "Interface analítica customizada desenvolvida com Next.js e Tailwind CSS.",
    coverImage: "https://picsum.photos/id/60/800/600",
    context: "Desenvolvimento de uma solução frontend para visualização de dados que superasse as limitações visuais de ferramentas low-code. Foco em performance e UX.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    images: ["https://picsum.photos/id/60/1200/800", "https://picsum.photos/id/180/1200/800"],
    featured: true,
    repoLink: "https://github.com"
  },
  {
    id: "3",
    slug: "automacao-mbastos",
    title: "Automação de Conciliação Financeira",
    category: "Automação Python",
    company: "Mbastos",
    description: "Script Python para conciliação automática de relatórios financeiros complexos.",
    coverImage: "https://picsum.photos/id/119/800/600",
    context: "A empresa gastava cerca de 15 horas semanais conciliando planilhas de diferentes adquirentes. A automação reduziu esse tempo para 3 minutos, cruzando dados de vendas, taxas e recebimentos.",
    tools: ["Python", "Pandas", "OpenPyXL", "SQL"],
    images: ["https://picsum.photos/id/119/1200/800"],
    featured: true
  },
  {
    id: "4",
    slug: "streamlit-relatorio",
    title: "Relatório Financeiro Consolidado",
    category: "Aplicação Streamlit",
    company: "Mbastos",
    description: "Web app interativo para stakeholders visualizarem resultados mensais.",
    coverImage: "https://picsum.photos/id/201/800/600",
    context: "Necessidade de democratizar o acesso aos dados financeiros sem enviar planilhas por e-mail. O Streamlit foi escolhido pela rapidez de desenvolvimento e fácil integração com o Data Warehouse.",
    tools: ["Streamlit", "Python", "SQL", "Plotly"],
    images: ["https://picsum.photos/id/201/1200/800", "https://picsum.photos/id/445/1200/800"],
    featured: true
  },
  {
    id: "5",
    slug: "site-farol-dev",
    title: "Website Institucional",
    category: "Site",
    company: "Farol Dev",
    description: "Landing page de alta conversão para agência de desenvolvimento.",
    coverImage: "https://picsum.photos/id/370/800/600",
    context: "Criação da presença digital da Farol Dev, focando em SEO e performance (Core Web Vitals).",
    tools: ["React", "Tailwind CSS", "Vite"],
    images: ["https://picsum.photos/id/370/1200/800"],
    featured: false
  },
  {
    id: "6",
    slug: "barber-manager",
    title: "BarberManager SaaS",
    category: "Web App",
    company: "Farol Dev",
    description: "Sistema de gestão completo para barbearias e salões de beleza.",
    coverImage: "https://picsum.photos/id/403/800/600",
    context: "SaaS desenvolvido para agendamento, controle financeiro e gestão de comissões.",
    tools: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    images: ["https://picsum.photos/id/403/1200/800"],
    featured: false
  }
];
