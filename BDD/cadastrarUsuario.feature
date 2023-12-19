Feature: Cadastrar Novo Usuario

  Scenario: Cadastrar um novo usuário
    
    Given que eu estou na homepage
    When eu clico na página de login do manager
    And eu clico no botão de adicionar customer
    And eu preencho o formulário de cadastro com firstname, lastname e post code
    And eu clico em adicionar customer
    Then o sistema deve cadastrar o customer na lista de customers