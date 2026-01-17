# MVP Cypress E2E

Este repositório contém um MVP de automação end-to-end com Cypress, criado com o objetivo de demonstrar organização de framework, boas práticas de QA e preparo para execução em pipeline.

O foco não é volume de testes, mas sim estrutura, clareza e estratégia.

---

## Objetivo

Este projeto foi criado para:

- Demonstrar uma estrutura básica e escalável de automação com Cypress
- Automatizar fluxos E2E reais do ponto de vista do usuário
- Aplicar Page Objects e Custom Commands
- Usar tags para execução seletiva de testes
- Mostrar preparo para integração com CI/CD

---

## Aplicação utilizada

Site público para testes de automação:

https://automationexercise.com

Fluxos automatizados no MVP:
Observação: Automação básica sem todos os cenários, apenas para demonstração de conhecimento
- Login
- Fluxo de compra (checkout fictício)
- Validação de sucesso
- Logout

---

## Estrutura do projeto

```
mvp-cypress-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── fluxo-compra.cy.js
│   │
│   ├── pages/
│   │   ├── login.page.js
│   │   ├── home.page.js
│   │   └── checkout.page.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── screenshots/
│   └── videos/
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## Estratégia adotada

- Testes E2E cobrindo fluxos completos
- Page Object Model para evitar duplicação de código
- Commands para ações reutilizáveis (ex: login)
- Specs focadas em comportamento, não em implementação

---

## Exemplo de teste

```js
describe('Login do usuário @smoke @login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login')
    cy.login('testqa@emailQa.com', '123456')

    cy.contains(/Logged in as/i).should('be.visible')
  })
})
```

---

## Uso de tags

As tags permitem rodar apenas um subconjunto de testes, algo comum em pipelines.

Tags utilizadas no projeto:
- `@smoke`
- `@login`
- `@e2e`

---

## Como executar

Instalar dependências:
```bash
npm install
```

Abrir Cypress em modo interativo:
```bash
npm run cy:open
```

Executar todos os testes:
```bash
npm run cy:run
```

Executar apenas testes smoke:
```bash
npm run cy:smoke
```

Executar apenas testes de login:
```bash
npm run cy:login
```

---

## Evidências (screenshots)

O Cypress está configurado para gerar screenshots automaticamente quando ocorre falha de teste.

Configuração no `cypress.config.js`:
```js
screenshotOnRunFailure: true
```

Os arquivos são gerados em:
```
cypress/screenshots/
```

Em um cenário de CI, essas evidências podem ser coletadas como artefatos do pipeline.

---

## Pipeline (conceito)

Este MVP está preparado para:

- Executar testes `@smoke` em pull requests
- Executar fluxos completos (`@e2e`) em pipelines noturnos
- Gerar evidências em caso de falha

---

## Próximas evoluções possíveis

- Integração com GitHub Actions
- Geração de relatório HTML (Mochawesome)
- Paralelização de testes
- Execução por ambiente
- Melhoria na gestão de dados de teste

---

## Autor

Thales Prates  

