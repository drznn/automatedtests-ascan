Feature: Login de Usuário Cadastrado

  Scenario: Realizar login com usuário selecionado

    Given que usuario não logado está na homepage 
    And clica no botão customer login
    And seleciona o customer de acordo com o firstname e lastname desejado
    And clica no botão login
    Then o usuário deve realizar o login e ir para a tela de account com seu firstname e lastname, dados da conta e ações de transação da conta
