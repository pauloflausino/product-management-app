# Teste Frontend com Next.js

Este projeto é uma aplicação web para **gerenciamento de produtos**, construída com **Next.js**, **TypeScript**, **Tailwind CSS**, **Zustand** para gerenciamento de estado, e **msw** para simulação de API. Também possui um teste de snapshot usando **Jest**.

## 🧱 Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand
- MSW
- Jest

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Instale as dependências

```bash
npm install next@latest react@latest react-dom@latest zustand@latest
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador para ver a aplicação.

### 4. Rodar os testes (Snapshot)

```bash
npm run test
```

## 📁 Estrutura do Projeto

- `pages/` — Contém as rotas da aplicação
- `components/` — Componentes reutilizáveis como formulário e card de produto
- `store/` — Gerenciamento de estado global com Zustand
- `styles/` — Arquivos de estilo (Tailwind)
- `__tests__/` — Testes com Jest

## ✅ Funcionalidades Implementadas

- Listagem de produtos com nome, categoria, preço, descrição e imagem
- Cadastro de novos produtos
- Gerenciamento de estado global
- Teste de snapshot da tela principal

## 📌 Em desenvolvimento (a implementar)

- Filtros por nome e faixa de preço
- Ordenação
- Paginação
- Layout responsivo
- Documentação técnica mais completa

---
Feito com 💙 por Paulo Flausino
