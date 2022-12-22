describe('Тестирование staya', function () {
    it('Позитивный кейс: проверка авторизации, логин верный, пароль верный', function () {
        cy.visit('https://staya.dog/');
        cy.get('button.Dec2022FamilyDelivertyPromo__closeButton').click();
        cy.contains('Вход');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-elena-litvinenko@qa.studio');
        
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('Qa123456');
        cy.get('.auth-form__submit > .s-button__content').should('not.be.disabled');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
         })



it('Негативный кейс: проверка авторизации, логин верный, пароль НЕверный', function () {
        cy.visit('https://staya.dog/');
        cy.get('button.Dec2022FamilyDelivertyPromo__closeButton').click();
        cy.contains('Вход');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vis-elena-litvinenko@qa.studio');
        
        cy.get('.auth-form__submit').should('be.disabled');
        cy.get('.auth-form > form > [type="password"]').type('Qa1234567');
        cy.get('.auth-form__submit > .s-button__content').should('not.be.disabled');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Невозможно войти с предоставленными учетными данными');
         })

 })
