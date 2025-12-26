import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uwxkpmdllogqwvdwmgdn.supabase.co';
const serviceRoleKey = 'sbp_87dab2d296c65cfed0e56ff261133790fbcfbc1f';

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupSupabase() {
  console.log('🚀 Iniciando configuração do Supabase...\n');

  try {
    // 1. Executar schema SQL
    console.log('📊 Criando tabela projects...');

    const { error: tableError } = await supabase.rpc('exec_sql', {
      sql: `
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

        -- Drop existing policies if they exist
        DROP POLICY IF EXISTS "Projects are viewable by everyone" ON projects;
        DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
        DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
        DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

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
      `
    });

    if (tableError) {
      console.log('⚠️  Tabela pode já existir, continuando...');
    } else {
      console.log('✅ Tabela projects criada!\n');
    }

    // 2. Inserir projetos de exemplo
    console.log('📝 Inserindo projetos de exemplo...');

    const { error: insertError } = await supabase.from('projects').insert([
      {
        slug: 'dashboard-ifood',
        title: 'Dashboard Ifood',
        category: 'Dashboard Power BI',
        company: 'Ifood',
        description: 'Análise de performance logística e distribuição de pedidos em tempo real.',
        cover_image: 'https://picsum.photos/id/48/800/600',
        context: 'Extração de dados de restaurantes usando API do Ifood e dados geoespaciais para entender o comportamento de pedidos em diferentes regiões. O objetivo principal foi identificar gargalos na entrega e oportunidades de expansão para parceiros logísticos.',
        dataset: 'Informações de fevereiro 2021 e novembro 2020 (nomes, logos, categorias, taxas, localizações, faixa de preços). Dados tratados para garantir anonimização de clientes sensíveis.',
        tools: ['Power BI', 'Python', 'Microsoft Fabric', 'DAX'],
        images: ['https://picsum.photos/id/48/1200/800', 'https://picsum.photos/id/20/1200/800', 'https://picsum.photos/id/1/1200/800'],
        featured: true
      },
      {
        slug: 'dashboard-next',
        title: 'Dashboard Web Next.js',
        category: 'Web Development',
        company: 'Personal Project',
        description: 'Interface analítica customizada desenvolvida com Next.js e Tailwind CSS.',
        cover_image: 'https://picsum.photos/id/60/800/600',
        context: 'Desenvolvimento de uma solução frontend para visualização de dados que superasse as limitações visuais de ferramentas low-code. Foco em performance e UX.',
        tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
        images: ['https://picsum.photos/id/60/1200/800', 'https://picsum.photos/id/180/1200/800'],
        featured: true,
        repo_link: 'https://github.com'
      },
      {
        slug: 'automacao-mbastos',
        title: 'Automação de Conciliação Financeira',
        category: 'Automação Python',
        company: 'Mbastos',
        description: 'Script Python para conciliação automática de relatórios financeiros complexos.',
        cover_image: 'https://picsum.photos/id/119/800/600',
        context: 'A empresa gastava cerca de 15 horas semanais conciliando planilhas de diferentes adquirentes. A automação reduziu esse tempo para 3 minutos, cruzando dados de vendas, taxas e recebimentos.',
        tools: ['Python', 'Pandas', 'OpenPyXL', 'SQL'],
        images: ['https://picsum.photos/id/119/1200/800'],
        featured: true
      },
      {
        slug: 'streamlit-relatorio',
        title: 'Relatório Financeiro Consolidado',
        category: 'Aplicação Streamlit',
        company: 'Mbastos',
        description: 'Web app interativo para stakeholders visualizarem resultados mensais.',
        cover_image: 'https://picsum.photos/id/201/800/600',
        context: 'Necessidade de democratizar o acesso aos dados financeiros sem enviar planilhas por e-mail. O Streamlit foi escolhido pela rapidez de desenvolvimento e fácil integração com o Data Warehouse.',
        tools: ['Streamlit', 'Python', 'SQL', 'Plotly'],
        images: ['https://picsum.photos/id/201/1200/800', 'https://picsum.photos/id/445/1200/800'],
        featured: true
      }
    ]);

    if (insertError) {
      console.log('⚠️  Projetos podem já existir:', insertError.message);
    } else {
      console.log('✅ Projetos de exemplo inseridos!\n');
    }

    // 3. Criar storage bucket
    console.log('🗂️  Criando bucket de storage...');

    const { error: bucketError } = await supabase.storage.createBucket('project-images', {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ['image/*']
    });

    if (bucketError && !bucketError.message.includes('already exists')) {
      console.log('⚠️  Erro ao criar bucket:', bucketError.message);
    } else {
      console.log('✅ Bucket project-images criado!\n');
    }

    console.log('🎉 Configuração concluída com sucesso!\n');
    console.log('📋 Próximos passos:');
    console.log('1. Crie um usuário admin em: https://uwxkpmdllogqwvdwmgdn.supabase.co/project/uwxkpmdllogqwvdwmgdn/auth/users');
    console.log('2. Configure as variáveis de ambiente na Vercel');
    console.log('3. Acesse seu site e veja os projetos!\n');

  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

setupSupabase();
