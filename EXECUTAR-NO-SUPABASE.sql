-- ====================================================================
-- COLE E EXECUTE TODO ESTE ARQUIVO NO SQL EDITOR DO SUPABASE
-- ====================================================================
-- Acesse: https://uwxkpmdllogqwvdwmgdn.supabase.co
-- Vá em: SQL Editor > New Query
-- Cole TUDO e clique em RUN
-- ====================================================================

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  company TEXT,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  context TEXT NOT NULL,
  dataset TEXT,
  tools TEXT[] NOT NULL DEFAULT '{}',
  images TEXT[] NOT NULL DEFAULT '{}',
  repo_link TEXT,
  live_link TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- 4. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 5. Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 6. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 7. Drop existing policies if they exist
DROP POLICY IF EXISTS "Projects are viewable by everyone" ON projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

-- 8. Create RLS Policies
-- Anyone can read projects
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

-- Only authenticated users can insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- 9. Insert sample projects
INSERT INTO projects (slug, title, category, company, description, cover_image, context, dataset, tools, images, featured, repo_link, live_link)
VALUES
  (
    'dashboard-ifood',
    'Dashboard Ifood',
    'Dashboard Power BI',
    'Ifood',
    'Análise de performance logística e distribuição de pedidos em tempo real.',
    'https://picsum.photos/id/48/800/600',
    'Extração de dados de restaurantes usando API do Ifood e dados geoespaciais para entender o comportamento de pedidos em diferentes regiões. O objetivo principal foi identificar gargalos na entrega e oportunidades de expansão para parceiros logísticos.',
    'Informações de fevereiro 2021 e novembro 2020 (nomes, logos, categorias, taxas, localizações, faixa de preços). Dados tratados para garantir anonimização de clientes sensíveis.',
    ARRAY['Power BI', 'Python', 'Microsoft Fabric', 'DAX'],
    ARRAY['https://picsum.photos/id/48/1200/800', 'https://picsum.photos/id/20/1200/800', 'https://picsum.photos/id/1/1200/800'],
    true,
    NULL,
    NULL
  ),
  (
    'dashboard-next',
    'Dashboard Web Next.js',
    'Web Development',
    'Personal Project',
    'Interface analítica customizada desenvolvida com Next.js e Tailwind CSS.',
    'https://picsum.photos/id/60/800/600',
    'Desenvolvimento de uma solução frontend para visualização de dados que superasse as limitações visuais de ferramentas low-code. Foco em performance e UX.',
    NULL,
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    ARRAY['https://picsum.photos/id/60/1200/800', 'https://picsum.photos/id/180/1200/800'],
    true,
    'https://github.com',
    NULL
  ),
  (
    'automacao-mbastos',
    'Automação de Conciliação Financeira',
    'Automação Python',
    'Mbastos',
    'Script Python para conciliação automática de relatórios financeiros complexos.',
    'https://picsum.photos/id/119/800/600',
    'A empresa gastava cerca de 15 horas semanais conciliando planilhas de diferentes adquirentes. A automação reduziu esse tempo para 3 minutos, cruzando dados de vendas, taxas e recebimentos.',
    NULL,
    ARRAY['Python', 'Pandas', 'OpenPyXL', 'SQL'],
    ARRAY['https://picsum.photos/id/119/1200/800'],
    true,
    NULL,
    NULL
  ),
  (
    'streamlit-relatorio',
    'Relatório Financeiro Consolidado',
    'Aplicação Streamlit',
    'Mbastos',
    'Web app interativo para stakeholders visualizarem resultados mensais.',
    'https://picsum.photos/id/201/800/600',
    'Necessidade de democratizar o acesso aos dados financeiros sem enviar planilhas por e-mail. O Streamlit foi escolhido pela rapidez de desenvolvimento e fácil integração com o Data Warehouse.',
    NULL,
    ARRAY['Streamlit', 'Python', 'SQL', 'Plotly'],
    ARRAY['https://picsum.photos/id/201/1200/800', 'https://picsum.photos/id/445/1200/800'],
    true,
    NULL,
    NULL
  ),
  (
    'site-farol-dev',
    'Website Institucional',
    'Site',
    'Farol Dev',
    'Landing page de alta conversão para agência de desenvolvimento.',
    'https://picsum.photos/id/370/800/600',
    'Criação da presença digital da Farol Dev, focando em SEO e performance (Core Web Vitals).',
    NULL,
    ARRAY['React', 'Tailwind CSS', 'Vite'],
    ARRAY['https://picsum.photos/id/370/1200/800'],
    false,
    NULL,
    NULL
  ),
  (
    'barber-manager',
    'BarberManager SaaS',
    'Web App',
    'Farol Dev',
    'Sistema de gestão completo para barbearias e salões de beleza.',
    'https://picsum.photos/id/403/800/600',
    'SaaS desenvolvido para agendamento, controle financeiro e gestão de comissões.',
    NULL,
    ARRAY['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    ARRAY['https://picsum.photos/id/403/1200/800'],
    false,
    NULL,
    NULL
  )
ON CONFLICT (slug) DO NOTHING;

-- 10. Configure Storage Policies (execute depois de criar o bucket)
-- Leitura pública
CREATE POLICY IF NOT EXISTS "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'project-images' );

-- Upload para usuários autenticados
CREATE POLICY IF NOT EXISTS "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'project-images' );

-- Deletar para usuários autenticados
CREATE POLICY IF NOT EXISTS "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'project-images' );

-- ====================================================================
-- ✅ PRONTO! Agora siga os próximos passos:
-- ====================================================================
-- 1. Criar Storage Bucket:
--    - Vá em Storage > Create bucket
--    - Nome: project-images
--    - Marque: Public bucket ✅
--    - Clique em Create
--
-- 2. Criar Usuário Admin:
--    - Vá em Authentication > Users
--    - Add user > Create new user
--    - Email: seu-email@exemplo.com
--    - Password: sua-senha-forte
--    - Auto Confirm User: ✅
--    - Create user
--
-- 3. Testar!
--    - Acesse seu site
--    - Vá em /#/admin/login
--    - Faça login com as credenciais criadas
-- ====================================================================
