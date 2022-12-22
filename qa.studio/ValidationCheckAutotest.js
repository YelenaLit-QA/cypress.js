describe('Проверка валидации пароля', function () {
   it('Негативный кейс: верный логин, невалидный пароль (6 знаков)', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLove1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

it('Негативный кейс: верный логин, невалидный пароль (нет цифр)', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })

it('Негативный кейс: верный логин, невалидный пароль (нет заглавных букв)', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iloveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
    })

