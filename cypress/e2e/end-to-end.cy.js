/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {

    /* 
    Testes End To End ou Testes de ponta a ponta, ligam uma série de funcionalidades de um sistema,
    simulando o comportamento do usuário final. Esses testes verificam se diferentes partes do sistema
    funcionam corretamente quando integradas, garantindo que o fluxo completo de uma funcionalidade
    funcione como esperado.
    Aqui iremos criar um teste end to end que cobre o fluxo de cadastro e login de um usuário em um sistema web.
    Em apenas um teste, ou seja, em um único "it", iremos:
    1. Acessar a página de cadastro.
    2. Preencher o formulário de cadastro com dados válidos.
    3. Submeter o formulário e verificar se o cadastro foi bem-sucedido.
    4. Acessar a página de login.
    5. Preencher o formulário de login com as credenciais do usuário recém-cadastrado.
    6. Submeter o formulário de login e verificar se o login foi bem-sucedido.

    Use as boas práticas aprendidas até agora para estruturar o teste.
    */

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
        // Criar todo o fluxo aqui dentro deste único "it"
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.internet.password()
        let confirmarsenha = senha
        cy.preencherCadastro(nome, email, telefone, senha, confirmarsenha)
        cy.get('#user-name').should('contain', nome)
        cy.get('.user-actions > .btn-outline-danger').click()
        cy.login(email, senha)
        cy.get('#user-name').should('contain', nome)
    });
});