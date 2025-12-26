# 📸 Como Adicionar Imagens do Projeto

## ✅ Estrutura já criada!

Já criei a pasta para as imagens do projeto "Relatório Financeiro Consolidado":
```
public/images/projects/relatorio-financeiro/
```

## 🎯 Passo a Passo:

### 1. Prepare as 4 imagens que você enviou

Você me mandou 4 screenshots do projeto Streamlit. Salve cada uma com o nome específico:

| Imagem que você enviou | Nome do arquivo | Descrição |
|------------------------|-----------------|-----------|
| Imagem 1 (fundo roxo) | `capa.png` | Título "Automação Conciliação Financeira" |
| Imagem 2 (gráficos) | `dashboard-gerenciais.png` | Relatórios Gerenciais (pizza + barras) |
| Imagem 3 (waterfall) | `composicao-dre.png` | Composição do Resultado DRE |
| Imagem 4 (barras horizontais) | `visao-executiva.png` | Visão Executiva DRE Cumulativa |

### 2. Coloque as imagens na pasta

Copie os 4 arquivos para:
```
/home/user/web-app-portfolio/public/images/projects/relatorio-financeiro/
```

### 3. Verifique os nomes

Os arquivos devem estar EXATAMENTE com estes nomes:
- ✅ `capa.png`
- ✅ `dashboard-gerenciais.png`
- ✅ `composicao-dre.png`
- ✅ `visao-executiva.png`

### 4. Faça commit e push

Depois que adicionar as imagens:
```bash
git add public/images/
git commit -m "feat: Add images for Relatório Financeiro project"
git push
```

## 🔧 O código já está configurado!

O arquivo `data.ts` já está atualizado para usar estas imagens:
- Imagem de capa: `/images/projects/relatorio-financeiro/capa.png`
- Galeria: 3 imagens dos dashboards

## ⚡ Deploy automático

Quando você fizer push, a Vercel vai automaticamente:
1. Detectar as novas imagens na pasta `public/`
2. Copiá-las para o build de produção
3. Servir as imagens com alta performance

## 💡 Dica Pro:

Para otimizar as imagens antes do upload:
- Use formato PNG ou WebP
- Tamanho recomendado: 1200x800px para imagens da galeria
- Comprima para reduzir tamanho (use TinyPNG ou similar)

---

**Precisa de ajuda?** Me avise quando colocar as imagens e eu faço o commit e push para você! 🚀
