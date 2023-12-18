# Desafio de Testes Automatizados com Playwright e TypeScript

## Objetivo do Projeto

Este repositório apresenta um projeto de testes automatizados desenvolvido para o Grupo de Testes de Software (GAT). O foco do projeto é demonstrar a automação de duas funcionalidades principais em um site de exemplo:

1. **Cadastrar um novo usuário**
2. **Login com o usuário criado**

O site de teste está disponível no seguinte link: [Way2Automation Banking](http://www.way2automation.com/angularjsprotractor/banking/#/login)

## Tecnologias Utilizadas

O projeto é desenvolvido utilizando o Framework [Playwright](https://playwright.dev/) na linguagem [TypeScript](https://www.typescriptlang.org/).


##  Padrão de Projeto : Page Object Model (POM)

O padrão de projeto utilizado para organizar e manter os testes é o POM (Page Object Model).

O Padrão de Projeto Page Object Model (POM) é uma abordagem de design usada em automação de testes para criar uma estrutura organizada e reutilizável. O POM é comumente utilizado em testes de interface de usuário, como testes de navegador web, e tem o objetivo de separar a lógica de teste da lógica de interação com a interface do usuário.

A ideia central do POM é representar cada página da aplicação como uma classe separada. Essa classe contém todos os elementos da página (como botões, campos de entrada, etc.) e os métodos necessários para interagir com esses elementos. Os testes, então, usam essas classes de "Page Object" para realizar ações na interface do usuário.

Este repositório contém testes automatizados desenvolvidos usando o Playwright, uma poderosa ferramenta de automação de browser.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

O repositório está organizado da seguinte forma:

- |-- AUTOMATEDTESTS-ASCAN
- ||-- pages
- | ||--accoutPage.ts
- | ||-- addCustomerPage.ts
- | ||-- customerListPage.ts
- | ||-- customerPage.ts
- | ||-- homePage.ts
- | ||-- managerPage.ts
- ||-- tests
- | ||-- cadastrarUsuario.spec.ts
- | ||-- loginUsuario.spec.ts
- |-- playwright.config.ts
- |-- README.md

## Padrão de Teste Triple A (AAA)

Para a organização e estruturação dos testes, será adotado o Padrão de Projeto AAA, que se refere a Arrange, Act, e Assert. Essa abordagem facilita a compreensão e manutenção dos testes, garantindo clareza nas etapas de preparação, execução e verificação.

- **Arrange**: Preparação do estado inicial necessário para o teste.
- **Act**: Execução da ação ou operação a ser testada.
- **Assert**: Verificação dos resultados esperados.

## BDD (Behavior Driven Development) e Gherkin

O projeto utiliza BDD como metodologia de desenvolvimento de testes. BDD é uma abordagem que visa envolver todas as partes interessadas, como desenvolvedores, testadores e stakeholders, na definição e execução de testes.

[Gherkin](https://cucumber.io/docs/gherkin/) é a linguagem de especificação utilizada para descrever cenários de teste em BDD. Ela é fácil de ler e escrever, permitindo uma colaboração eficaz entre as equipes de desenvolvimento e teste.


- **AUTOMATEDTESTS-ASCAN/tests**: Contém os arquivos de teste para as funcionalidades de cadastro de usuário e login.
- **package.json**: Arquivo de configuração do Node.js que lista as dependências do projeto.
- **playwright.config.ts**: Configurações específicas do Playwright.

