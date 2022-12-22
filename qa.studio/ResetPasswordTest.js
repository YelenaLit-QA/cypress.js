describe('Проверка восстановления пароля', function () {
   it('Позитивный кейс: восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();
        cy.get('#restoreEmailButton').should('be.disabled');
        cy.get('#forgotEmailButton').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('not.be.disabled');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();

        
    })

       })