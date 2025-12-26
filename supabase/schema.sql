-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create projects table
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

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy: Anyone can read projects
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

-- Create policy: Only authenticated users can insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy: Only authenticated users can update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy: Only authenticated users can delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data from your existing projects
INSERT INTO projects (id, slug, title, category, company, description, cover_image, context, dataset, tools, images, featured)
VALUES
  (
    uuid_generate_v4(),
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
    true
  ),
  (
    uuid_generate_v4(),
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
    true
  )
ON CONFLICT (slug) DO NOTHING;
