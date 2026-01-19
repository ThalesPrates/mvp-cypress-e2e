
MVP CYPRESS E2E

Este repositório contém um MVP de automação end-to-end com Cypress,
criado para demonstrar organização de framework, boas práticas de QA e
preparo para execução em CI.

O foco não é volume de testes, e sim estrutura, clareza e estratégia:
como os testes são organizados, como a execução seletiva funciona e como
isso se conecta com um pipeline real.

OBJETIVO

Este projeto foi criado para:

- Demonstrar uma estrutura simples e escalável de automação com Cypress
- Automatizar fluxos E2E do ponto de vista do usuário
- Separar smoke tests de testes E2E completos
- Usar tags para execução seletiva (@smoke, @e2e, @login, @crud)
- Demonstrar integração com pipeline no GitHub Actions

APLICAÇÃO UTILIZADA

Site público para prática de automação:

https://automationexercise.com

FLUXOS AUTOMATIZADOS NO MVP

Automação propositalmente enxuta, priorizando estratégia e estrutura.

- Login de usuário
- Adição de produto ao carrinho
- Validação de item no carrinho
- Fluxo completo de checkout
- Logout
- CRUD simples: criação e exclusão de conta (cadastro + delete)

ESTRUTURA DO PROJETO

cypress/
 ├─ e2e/
 │   ├─ auth/
 │   │   └─ login.cy.js
 │   ├─ checkout/
 │   │   └─ checkout-success.cy.js
 │   ├─ crud/
 │   │   └─ conta-crud.cy.js
 │   └─ smoke.cy.js
 │
 ├─ support/
 │   ├─ commands.js
 │   └─ e2e.js
 │
 ├─ screenshots/
 └─ videos/

.github/
 └─ workflows/
    └─ smoke.yml

cypress.config.js
package.json
README.txt

ORGANIZAÇÃO ADOTADA

- Specs organizados por feature
- Smoke separado em arquivo próprio
- Estrutura preparada para crescimento sem virar monólito

ESTRATÉGIA DE TESTES

- Smoke tests validam se o sistema está funcional (login + carrinho)
- Testes E2E validam fluxo completo de negócio (checkout)
- CRUD garante criação e limpeza de dados, evitando sujeira no ambiente
- Execução seletiva por tag reduz tempo de feedback no CI

USO DE TAGS

As tags são usadas diretamente no título dos testes e filtradas com
cypress-grep.

Tags utilizadas:

- @smoke -> validações rápidas e essenciais
- @login -> testes de autenticação
- @e2e -> fluxos completos de negócio
- @crud -> fluxos de criação e remoção de dados

Exemplo:

describe('@smoke Carrinho: login e item no carrinho', () => {
  it('deve permitir login e adicionar produto', () => { ... })
})

EXECUÇÃO LOCAL

Instalar dependências:

npm install

Abrir Cypress (modo interativo):

npm run cy:open

Executar todos os testes:

npm run cy:run

Executar apenas smoke:

npm run cy:smoke

Executar apenas E2E:

npm run cy:e2e

Executar apenas CRUD:

npx cypress run --spec "cypress/e2e/crud/conta-crud.cy.js"

EXECUÇÃO SELETIVA POR TAG

O projeto usa o plugin cypress-grep para filtrar testes por tag.

Exemplo no package.json:

"cy:smoke": "cypress run --env grep=@smoke,grepFilterSpecs=true"

O parâmetro grepFilterSpecs=true garante que apenas os arquivos que
contêm testes com a tag informada sejam executados.

SOBRE CREDENCIAIS NO CÓDIGO

Neste MVP, as credenciais estão hardcoded nos testes apenas para fins de
demonstração.

Em um cenário real, essas informações devem ser externalizadas via
Cypress.env() e secrets do pipeline para evitar dados sensíveis no
repositório e permitir múltiplos usuários por ambiente.

Essa decisão foi mantida simples propositalmente para não adicionar
complexidade de infraestrutura ao MVP.

USO DE IA NO DESENVOLVIMENTO DO MVP

Parte do código e da documentação deste MVP foi gerada com apoio de IA,
como forma de acelerar a criação do protótipo.

A curadoria, os ajustes técnicos, as decisões de estratégia de testes e
a validação dos fluxos foram realizados manualmente.

EVIDÊNCIAS DE FALHA

O Cypress gera screenshots automaticamente quando ocorre erro de teste.

Arquivos em:

cypress/screenshots/

No pipeline, esses arquivos são coletados como artefatos para análise.

PIPELINE (CI)

O projeto possui um workflow no GitHub Actions que:

- Executa testes @smoke em PRs e pushes na main
- Usa Node compatível com Cypress 15
- Está preparado para expansão futura (ex: E2E noturno)

Arquivo:

.github/workflows/smoke.yml

PRÓXIMAS EVOLUÇÕES POSSÍVEIS

- Geração de relatório HTML (Mochawesome)
- Execução por ambiente (dev / hml / prod)
- Paralelização de specs
- Gestão de dados de teste (fixtures e factories)
- Integração com dashboards de qualidade

AUTOR
Thales S. Prates
