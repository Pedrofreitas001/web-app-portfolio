# Configuração do Supabase Storage

## 1. Execute o SQL do schema.sql

No painel do Supabase:
1. Acesse: https://uwxkpmdllogqwvdwmgdn.supabase.co
2. Vá em **SQL Editor** (no menu lateral)
3. Clique em **New Query**
4. Copie e cole todo o conteúdo do arquivo `supabase/schema.sql`
5. Clique em **Run** para executar

## 2. Configure o Storage para imagens

No painel do Supabase:
1. Vá em **Storage** (no menu lateral)
2. Clique em **Create a new bucket**
3. Configure assim:
   - **Name**: `project-images`
   - **Public bucket**: ✅ Marque como público
   - Clique em **Create bucket**

## 3. Configure as políticas do Storage

Após criar o bucket, configure as políticas:

1. Clique no bucket `project-images`
2. Vá na aba **Policies**
3. Clique em **New Policy**
4. Adicione estas políticas:

### Política 1: Leitura pública (SELECT)
```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'project-images' );
```

### Política 2: Upload para usuários autenticados (INSERT)
```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'project-images' );
```

### Política 3: Deletar para usuários autenticados (DELETE)
```sql
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'project-images' );
```

## 4. Crie um usuário admin para acessar o painel

No painel do Supabase:
1. Vá em **Authentication** > **Users**
2. Clique em **Add user** > **Create new user**
3. Configure:
   - **Email**: seu-email@exemplo.com (use seu email real)
   - **Password**: escolha uma senha forte
   - **Auto Confirm User**: ✅ Marque esta opção
4. Clique em **Create user**

## 5. Pegue as credenciais necessárias

1. Vá em **Settings** > **API**
2. Copie:
   - **Project URL**: já temos (https://uwxkpmdllogqwvdwmgdn.supabase.co)
   - **anon public**: já temos (sb_publishable_zX2xbuPBNG_tPBa4x2jB0g_R_Zi2KSt)

Pronto! Depois que fizer isso, a aplicação estará pronta para funcionar.
