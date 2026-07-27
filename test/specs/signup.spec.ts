import HomePage from '../pageobjects/home.page';
import SignupPage from '../pageobjects/signup.page';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Sign Up', () => {
    beforeEach(async () => {
        await HomePage.acessarLogin();

        const abaSignUp = $('android=new UiSelector().text("Sign up")');
        await abaSignUp.waitForDisplayed();
        await abaSignUp.click();
    });

    it('deve exibir os campos da tela de cadastro', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Cadastro');
        addStory('Exibição da tela de cadastro');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(SignupPage.txtEmail).toBeDisplayed();
        await expect(SignupPage.txtPassword).toBeDisplayed();
        await expect(SignupPage.txtConfirmPassword).toBeDisplayed();
        await expect(SignupPage.btnSignUp).toBeDisplayed();
    });

    it('deve preencher o formulário de cadastro', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Cadastro');
        addStory('Cadastro de novo usuário');
        addSeverity('critical');
        addOwner('Jaqueline Fernandes de Andrade');

        await SignupPage.realizarCadastro(
            'qa@teste.com',
            '12345678'
        );

        await browser.saveScreenshot(
            './evidencias/cadastro-apos-signup.png'
        );

        await browser.pause(10000);
    });
});