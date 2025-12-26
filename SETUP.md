# 🚀 Guia de Setup e Deploy - Portfolio Pedro Freitas

## 📋 Pré-requisitos

- Node.js instalado
- Conta no Supabase
- Conta na Vercel

## 🔧 Configuração do Supabase

### 1. Execute o Schema SQL

1. Acesse o painel do Supabase: https://uwxkpmdllogqwvdwmgdn.supabase.co
2. Vá em **SQL Editor** (menu lateral)
3. Clique em **New Query**
4. Copie e cole todo o conteúdo do arquivo `supabase/schema.sql`
5. Clique em **Run** para executar

### 2. Configure o Storage para Imagens

1. Vá em **Storage** (menu lateral)
2. Clique em **Create a new bucket**
3. Configure:
   - **Name**: `project-images`
   - **Public bucket**: ✅ Marque como público
   - Clique em **Create bucket**

### 3. Configure as Políticas do Storage

Após criar o bucket, vá para o SQL Editor e execute:

```sql
-- Política 1: Leitura pública (SELECT)
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'project-images' );

-- Política 2: Upload para usuários autenticados (INSERT)
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'project-images' );

-- Política 3: Deletar para usuários autenticados (DELETE)
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'project-images' );
```

### 4. Crie um Usuário Admin

1. Vá em **Authentication** > **Users**
2. Clique em **Add user** > **Create new user**
3. Configure:
   - **Email**: seu-email@exemplo.com
   - **Password**: escolha uma senha forte
   - **Auto Confirm User**: ✅ Marque esta opção
4. Clique em **Create user**

## 🏠 Configuração Local

### 1. Instale as Dependências

```bash
npm install
```

### 2. Configure as Variáveis de Ambiente

O arquivo `.env` já está configurado com suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://uwxkpmdllogqwvdwmgdn.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Execute Localmente

```bash
npm run dev
```

O projeto estará disponível em: http://localhost:5173

## 🎨 Acessando o Painel Admin

1. Após configurar o Supabase e criar um usuário
2. Acesse: http://localhost:5173/#/admin/login
3. Faça login com o email e senha que você criou no Supabase
4. Você será redirecionado para o painel admin

### Funcionalidades do Admin:

- ✅ **Criar Projetos** - Adicione novos projetos ao portfolio
- ✅ **Upload de Imagens** - Faça upload de imagens de capa e galeria
- ✅ **Editar Projetos** - Atualize informações dos projetos existentes
- ✅ **Deletar Projetos** - Remova projetos do portfolio
- ✅ **Gerenciar Ferramentas** - Adicione tecnologias usadas nos projetos
- ✅ **Links Externos** - Adicione links para GitHub e projeto online

## 🚀 Deploy na Vercel

### Opção 1: Deploy via Interface da Vercel

1. Acesse https://vercel.com
2. Clique em **Add New** > **Project**
3. Importe seu repositório do GitHub
4. Configure as variáveis de ambiente:
   - `VITE_SUPABASE_URL`: https://uwxkpmdllogqwvdwmgdn.supabase.co
   - `VITE_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
5. Clique em **Deploy**

### Opção 2: Deploy via CLI da Vercel

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Para deploy em produção
vercel --prod
```

Durante o deploy, você será perguntado sobre as configurações:
- Framework: **Vite**
- Build Command: **npm run build**
- Output Directory: **dist**

**Importante**: Adicione as variáveis de ambiente no painel da Vercel:
1. Vá em **Settings** > **Environment Variables**
2. Adicione as variáveis do arquivo `.env`

## 📱 Acessando o Admin em Produção

Após o deploy, acesse:
- Site público: https://seu-projeto.vercel.app
- Painel admin: https://seu-projeto.vercel.app/#/admin/login

## 🎯 Próximos Passos

Agora você pode:

1. ✅ Acessar o painel admin
2. ✅ Criar seus primeiros projetos
3. ✅ Fazer upload de imagens reais dos seus projetos
4. ✅ Personalizar o conteúdo do portfolio
5. ✅ Compartilhar seu portfolio profissional!

## 🆘 Problemas Comuns

### Erro ao fazer upload de imagens

- Verifique se o bucket `project-images` está criado no Supabase
- Verifique se as políticas de storage foram criadas
- Verifique se você está autenticado

### Erro ao carregar projetos

- Verifique se o schema SQL foi executado corretamente
- Verifique se as variáveis de ambiente estão corretas
- Verifique o console do navegador para erros específicos

### Não consigo fazer login

- Verifique se o usuário foi criado no Supabase
- Verifique se marcou "Auto Confirm User"
- Tente resetar a senha no painel do Supabase

## 📞 Suporte

Se tiver problemas, verifique:
1. Console do navegador (F12) para erros JavaScript
2. Network tab para erros de API
3. Logs do Supabase em: https://uwxkpmdllogqwvdwmgdn.supabase.co

---

**Desenvolvido com ❤️ usando React + Vite + Supabase + Vercel**
