
# API de Produtos e Pedidos (NestJS)

Este projeto é uma API RESTful desenvolvida com NestJS para gerenciamento de produtos e pedidos. Inclui autenticação JWT, testes, documentação Swagger e está pronto para Docker.

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional)
- [npm](https://www.npmjs.com/)

## 📦 Instalação

```bash
npm install
```

## ▶️ Executar localmente

```bash
npm run start:dev
```

## 🐳 Executar com Docker

```bash
docker-compose up --build
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

## 🔐 Autenticação

- Endpoint de login: `POST /auth/login`
- Body esperado:

```json
{
  "username": "admin",
  "password": "admin"
}
```

- Token retornado deve ser usado como Bearer Token nas requisições protegidas.

## 🧪 Testes

```bash
npm run test
```

## 📚 Documentação Swagger

Acesse em: [http://localhost:3000/api](http://localhost:3000/api)

## 📁 Estrutura

- `src/products`: CRUD de produtos
- `src/orders`: Gerenciamento de pedidos
- `src/auth`: Autenticação JWT
- `src/users`: Gerenciamento de usuários
- `src/common`: Middlewares e interceptors

## 🛠️ Tecnologias

- NestJS
- TypeORM
- JWT
- SQLite (configurável)
- Swagger
- Docker

## ✅ Requisitos Atendidos

- CRUD de Produtos
- Criação e listagem de Pedidos
- Verificação e atualização de estoque
- Middleware de log
- Princípios SOLID e separação por camadas
- Testes unitários
- Documentação Swagger
- Autenticação JWT
- Docker
