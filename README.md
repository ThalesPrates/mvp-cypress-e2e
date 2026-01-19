# 🧪 MVP Cypress E2E

Este repositório contém um MVP de automação end-to-end com Cypress,
criado para demonstrar organização de framework, boas práticas de QA e
preparo para execução em pipeline (CI).

O foco aqui não é quantidade de testes, e sim **estrutura, clareza e
estratégia de qualidade**: como o projeto é organizado, como funciona a
execução seletiva e como isso se encaixa em um fluxo de CI/CD.

------------------------------------------------------------------------

## 🎯 Objetivo

Este projeto foi criado para:

-   Demonstrar uma estrutura básica e escalável de automação com
    Cypress\
-   Automatizar fluxos E2E reais do ponto de vista do usuário\
-   Aplicar Page Objects e Custom Commands\
-   Usar tags para execução seletiva de testes (smoke, login, e2e)\
-   Mostrar preparo para integração com pipeline de CI/CD

------------------------------------------------------------------------

## 🌐 Aplicação utilizada

Site público para testes de automação:

👉 https://automationexercise.com

------------------------------------------------------------------------

## ✅ Fluxos automatizados no MVP

> Observação: automação propositalmente enxuta, focada em demonstrar
> abordagem técnica e não cobertura total.

-   Login\
-   Fluxo de compra (checkout fictício)\
-   Validação de sucesso do pedido\
-   Logout

------------------------------------------------------------------------

## 📁 Estrutura do projeto

``` text
mvp-cypress-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── autent/login.cy.js
│   │   └── checkout/checkout-successo.cy.js
│   │
│   ├── pages/
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
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
├── .github/workflows/
│   └── smoke.yml
└── README.md
```

------------------------------------------------------------------------

## 🧠 Estratégia adotada

-   Testes E2E cobrindo fluxos completos do usuário\
-   Page Object Model para centralizar regras de tela e reduzir
    duplicação\
-   Custom Commands para ações reutilizáveis (ex: login, adicionar
    produto ao carrinho)\
-   Specs focadas em comportamento, não em detalhes técnicos de
    implementação\
-   Separação entre testes de smoke e testes E2E completos via tags

------------------------------------------------------------------------

## 🧪 Exemplo de teste com tag

``` js
describe('Login do usuário', () => {

  it('Deve realizar login com sucesso @smoke @login', () => {
    cy.login(user.email, user.password)
    cy.contains('Logged in as').should('be.visible')
  })

})
```

As tags ficam no **título do teste** e são usadas pelo plugin
`cypress-grep` para filtrar a execução.

------------------------------------------------------------------------

## 🏷️ Uso de tags

As tags permitem rodar apenas um subconjunto de testes, algo muito comum
em pipelines.

Tags utilizadas no projeto:

-   `@smoke` → testes rápidos para validação básica do sistema\
-   `@login` → testes relacionados a autenticação\
-   `@e2e` → fluxos completos de ponta a ponta

------------------------------------------------------------------------

## ▶️ Como executar localmente

### Instalar dependências

``` bash
npm install
```

### Abrir Cypress em modo interativo

``` bash
npm run cy:open
```

### Executar todos os testes

``` bash
npm run cy:run
```

### Executar apenas testes smoke

``` bash
npm run cy:smoke
```

### Executar apenas testes de login

``` bash
npm run cy:login
```

------------------------------------------------------------------------

## 🔍 Como funciona a execução por tag

O projeto utiliza o plugin **cypress-grep** para permitir filtragem por
tag.

Nos scripts do `package.json`:

``` json
"cy:smoke": "cypress run --env grep=@smoke,grepFilterSpecs=true"
```

O parâmetro `grepFilterSpecs=true` garante que apenas os arquivos que
possuem testes com a tag informada sejam executados, evitando que specs
sem relação com o smoke entrem na execução.

------------------------------------------------------------------------

## 📸 Evidências (screenshots)

O Cypress está configurado para gerar screenshots automaticamente quando
ocorre falha de teste:

``` js
screenshotOnRunFailure: true
```

Os arquivos são salvos em:

``` text
cypress/screenshots/
```

No pipeline, essas evidências são coletadas como artefatos para análise
em caso de falha.

------------------------------------------------------------------------

## ⚙️ Pipeline (CI)

O projeto já conta com um workflow no GitHub Actions que:

-   Executa testes **@smoke** em pull requests e pushes na main\
-   Gera evidências (screenshots e vídeos) quando necessário\
-   Está preparado para expansão futura (ex: execução noturna de @e2e)

Arquivo:

``` text
.github/workflows/smoke.yml
```

------------------------------------------------------------------------

## 🚀 Próximas evoluções possíveis

Alguns próximos passos naturais para esse MVP seriam:

-   Geração de relatório HTML (Mochawesome) no pipeline\
-   Execução por ambiente (dev, hml, etc.)\
-   Paralelização de testes\
-   Gestão mais robusta de dados de teste\
-   Integração com dashboards de qualidade

------------------------------------------------------------------------

## 👤 Autor

**Thales S. Prates**\
QA Engineer \| Automação \| Estratégia de Qualidade
