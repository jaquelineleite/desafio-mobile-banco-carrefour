import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Login', () => {
    beforeEach(async () => {
        await HomePage.abaLogin.click();
    });

    it('deve exibir os campos da tela de login', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Login');
        addStory('Exibição dos campos de autenticação');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(LoginPage.txtEmail).toBeDisplayed();
        await expect(LoginPage.txtPassword).toBeDisplayed();
        await expect(LoginPage.btnLogin).toBeDisplayed();
    });

    it('deve preencher e enviar o formulário de login', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Login');
        addStory('Autenticação do usuário');
        addSeverity('critical');
        addOwner('Jaqueline Fernandes de Andrade');

        await LoginPage.realizarLogin(
            'teste@webdriver.io',
            '12345678',
        );
    });
});