-- ============================================================
-- FIX: Corrigir políticas RLS para permitir leitura pública
-- ============================================================
-- COPIE E EXECUTE NO SQL EDITOR DO SUPABASE
-- ============================================================

-- 1. Remover todas as políticas antigas
DROP POLICY IF EXISTS "Projects are viewable by everyone" ON projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;
DROP POLICY IF EXISTS "Enable read access for all users" ON projects;
DROP POLICY IF EXISTS "Public read access" ON projects;

-- 2. Desabilitar RLS temporariamente para testar
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;

-- 3. Habilitar RLS novamente
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 4. Criar política simples de leitura pública (SEM autenticação)
CREATE POLICY "Enable read access for all users"
  ON projects
  FOR SELECT
  USING (true);

-- 5. Políticas para usuários autenticados (admin)
CREATE POLICY "Enable insert for authenticated users"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable delete for authenticated users"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================
-- ✅ PRONTO! Agora qualquer pessoa pode LER os projetos
-- Mas só usuários autenticados podem EDITAR/CRIAR/DELETAR
-- ============================================================

-- Verificar se funcionou:
SELECT COUNT(*) as total_projetos FROM projects;
-- Deve retornar o número de projetos que você inseriu
