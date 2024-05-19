# Gerenciador de Biblioteca

Este projeto é uma aplicação NestJS que se conecta a um banco de dados PostgreSQL rodando em um contêiner Docker.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Docker](https://www.docker.com/) instalado
- [Nest CLI](https://docs.nestjs.com/cli/overview) instalado (`npm install -g @nestjs/cli`)

## Passo a Passo

### 1. Clonar o Repositório

```sh
git clone https://github.com/AnaKarolini/Gerenciador-de-Biblioteca.git
cd Gerenciador-de-Biblioteca/api

docker run --name postgres-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=GerenciadorBiblioteca -p 5432:5432 -d postgres:latest

npm install

npm run start:dev
```
