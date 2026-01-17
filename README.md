# MVP Cypress E2E

MVP de automação de testes end-to-end utilizando **Cypress**, com foco em organização de framework, boas práticas e execução seletiva via tags.

## Aplicação testada
https://automationexercise.com

## Tecnologias
- Cypress
- JavaScript
- cypress-grep
- Mochawesome

## Estrutura
- Page Objects
- Custom Commands
- Specs E2E
- Execução por tags (@smoke, @login, @e2e)

## Instalação
npm install

## Execução dos testes
- Abrir interface:
  npm run cy:open

- Smoke:
  npm run cy:smoke

- Login:
  npm run cy:login

- E2E completo:
  npm run cy:e2e

## Estratégia
- Commands executam ações, não validações
- Asserções ficam nos testes
- Tags simulam execução em pipeline

## Evidências
- Screenshots automáticos em falhas
- Vídeos em execução headless
- Relatório HTML com Mochawesome

## Autor
Thales Prates
