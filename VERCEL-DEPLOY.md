# 🚀 Deploy na Vercel - Passo a Passo

## ⚠️ CRÍTICO: Configure as Variáveis de Ambiente ANTES do Deploy

**O deploy falhará se você não configurar as variáveis de ambiente!**

O erro "supabaseUrl is required" acontece porque o Vite precisa das variáveis de ambiente **durante o build**, não em runtime.

## 📝 Passo a Passo:

### 1. Acesse o Projeto na Vercel

1. Vá para https://vercel.com
2. Encontre seu projeto `web-app-portfolio`
3. Clique no projeto para abrir

### 2. Configure as Variáveis de Ambiente

1. No menu lateral, clique em **Settings**
2. Clique em **Environment Variables**
3. Adicione as seguintes variáveis:

#### Variável 1: VITE_SUPABASE_URL
```
Name: VITE_SUPABASE_URL
Value: https://uwxkpmdllogqwvdwmgdn.supabase.co
Environment: Production, Preview, Development (marque todos)
```

#### Variável 2: VITE_SUPABASE_ANON_KEY
```
Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3eGtwbWRsbG9ncXd2ZHdtZ2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMzg2NjUsImV4cCI6MjA1MDgxNDY2NX0.sb_publishable_zX2xbuPBNG_tPBa4x2jB0g_R_Zi2KSt
Environment: Production, Preview, Development (marque todos)
```

### 3. Redeploy

Após adicionar as variáveis:

1. Vá para a aba **Deployments**
2. Clique nos 3 pontinhos (`...`) do último deployment
3. Clique em **Redeploy**
4. Aguarde o build completar

**OU**

Simplesmente faça um novo push para o repositório e a Vercel fará o deploy automaticamente.

## ✅ Verificação

Após o deploy bem-sucedido:

1. Acesse seu site: `https://seu-projeto.vercel.app`
2. Teste o admin: `https://seu-projeto.vercel.app/#/admin/login`
3. Verifique se os projetos carregam corretamente

## 🔧 Alternativa: Deploy via CLI

Se preferir usar a CLI da Vercel:

```bash
# Instale a CLI
npm i -g vercel

# Faça login
vercel login

# Deploy com variáveis inline
vercel --prod \
  -e VITE_SUPABASE_URL=https://uwxkpmdllogqwvdwmgdn.supabase.co \
  -e VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3eGtwbWRsbG9ncXd2ZHdtZ2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMzg2NjUsImV4cCI6MjA1MDgxNDY2NX0.sb_publishable_zX2xbuPBNG_tPBa4x2jB0g_R_Zi2KSt
```

## 📱 Após o Deploy

Seu portfolio estará disponível em:
- **Site público**: `https://seu-projeto.vercel.app`
- **Painel admin**: `https://seu-projeto.vercel.app/#/admin/login`

Use o email e senha que você criou no Supabase para fazer login no admin!

---

**Dica**: Salve a URL do seu site para compartilhar no LinkedIn, CV, etc! 🎉
