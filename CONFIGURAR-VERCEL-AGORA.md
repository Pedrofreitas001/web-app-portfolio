# ⚡ CONFIGURE A VERCEL AGORA - 3 PASSOS SIMPLES

## 🚨 O QUE ESTÁ ACONTECENDO

Seu código está 100% correto e o build local funciona perfeitamente!

O problema é que a **Vercel precisa das variáveis de ambiente** para fazer o build.

---

## ✅ SOLUÇÃO RÁPIDA (3 minutos)

### 1️⃣ Entre no Projeto na Vercel

Acesse: https://vercel.com/dashboard

Clique no seu projeto: **web-app-portfolio**

### 2️⃣ Adicione as Variáveis de Ambiente

1. Clique em **Settings** (menu lateral)
2. Clique em **Environment Variables**
3. Clique no botão **Add New**

**Adicione estas 2 variáveis:**

#### Variável 1:
```
Key: VITE_SUPABASE_URL
Value: https://uwxkpmdllogqwvdwmgdn.supabase.co
```
✅ Marque: **Production, Preview, Development** (todas)

Clique em **Save**

#### Variável 2:
```
Key: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3eGtwbWRsbG9ncXd2ZHdtZ2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMzg2NjUsImV4cCI6MjA1MDgxNDY2NX0.sb_publishable_zX2xbuPBNG_tPBa4x2jB0g_R_Zi2KSt
```
✅ Marque: **Production, Preview, Development** (todas)

Clique em **Save**

### 3️⃣ Faça Redeploy

1. Vá para a aba **Deployments** (menu superior)
2. Clique nos **3 pontinhos (...)** do deployment mais recente
3. Clique em **Redeploy**
4. Aguarde 1-2 minutos

---

## 🎯 PRONTO!

Após o redeploy, seu site estará funcionando em:
- **Site**: `https://seu-projeto.vercel.app`
- **Admin**: `https://seu-projeto.vercel.app/#/admin/login`

---

## 🔍 COMO VERIFICAR SE DEU CERTO

1. Abra o site
2. A página inicial deve carregar (sem projetos ainda, tudo bem)
3. Abra o console do navegador (F12)
4. **NÃO deve** aparecer erro "supabaseUrl is required"

Se aparecer algum erro, volte e verifique se as variáveis foram salvas corretamente!

---

## 🆘 Problemas?

- **Erro persiste?** Certifique-se de marcar ALL environments (Production, Preview, Development)
- **Build falhou?** Verifique se as variáveis foram salvas (refresh na página)
- **Página em branco?** Abra o console (F12) e me envie o erro

---

**Agora é só configurar o Supabase (SQL + Storage) conforme o SETUP.md e começar a usar! 🚀**
