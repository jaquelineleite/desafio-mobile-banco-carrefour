import HomePage from '../pageobjects/home.page.js';
import SignupPage from '../pageobjects/signup.page.js';
import signupData from '../data/signup.data.json';
import { Messages } from '../constants/Messages.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

const invalidSignupScenarios = [
    {
        name: 'e-mail inválido',
        data: signupData.invalidEmail,
        expectedMessage: Messages.INVALID_EMAIL,
    },
    {
        name: 'senha com menos de 8 caracteres',
        data: signupData.shortPassword,
        expectedMessage: Messages.PASSWORD_TOO_SHORT,
    },
    {
        name: 'confirmação de senha diferente',
        data: signupData.passwordMismatch,
        expectedMessage: Messages.PASSWORD_MISMATCH,
    },
];

describe('Sign Up', () => {
    beforeEach(async () => {
        await HomePage.acessarLogin();

        await SignupPage.acessarCadastro();
    });

    it('deve exibir os campos da tela de cadastro', async () => {
        addEpic('Desafio Mobile - Banco Carrefour');
        addFeature('Cadastro');
        addStory('Exibição da tela de cadastro');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(SignupPage.txtEmail).toBeDisplayed();
        await expect(SignupPage.txtPassword).toBeDisplayed();
        await expect(SignupPage.txtConfirmPassword).toBeDisplayed();
        await expect(SignupPage.btnSignUp).toBeDisplayed();
    });

    for (const scenario of invalidSignupScenarios) {
        it(`deve exibir mensagem de erro para ${scenario.name}`, async () => {
            addEpic('Desafio Mobile - Banco Carrefour');
            addFeature('Cadastro');
            addStory(`Validação de ${scenario.name}`);
            addSeverity('normal');
            addOwner('Jaqueline Fernandes de Andrade');

            await SignupPage.realizarCadastro(
                scenario.data.email,
                scenario.data.password,
                scenario.data.confirmPassword,
            );

            await expect(
                SignupPage.elementoPorTexto(
                    scenario.expectedMessage,
                ),
            ).toBeDisplayed();
        });
    }

    it('deve preencher o formulário de cadastro com dados válidos', async () => {
        addEpic('Desafio Mobile - Banco Carrefour');
        addFeature('Cadastro');
        addStory('Cadastro de novo usuário');
        addSeverity('critical');
        addOwner('Jaqueline Fernandes de Andrade');

        await SignupPage.realizarCadastro(
            signupData.valid.email,
            signupData.valid.password,
            signupData.valid.confirmPassword,
        );
    });
});
