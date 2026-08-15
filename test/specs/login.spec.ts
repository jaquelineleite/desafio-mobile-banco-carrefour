import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import loginData from '../data/login.data.json';
import { Messages } from '../constants/Messages.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

const invalidLoginScenarios = [
    {
        name: 'e-mail inválido',
        data: loginData.invalidEmail,
        expectedMessage: Messages.INVALID_EMAIL,
    },
    {
        name: 'senha com menos de 8 caracteres',
        data: loginData.shortPassword,
        expectedMessage: Messages.PASSWORD_TOO_SHORT,
    },
];

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

    for (const scenario of invalidLoginScenarios) {
        it(`deve exibir mensagem de erro para ${scenario.name}`, async () => {
            addEpic('Banco Carrefour Mobile');
            addFeature('Login');
            addStory(`Validação de ${scenario.name}`);
            addSeverity('normal');
            addOwner('Jaqueline Fernandes de Andrade');

            await LoginPage.realizarLogin(
                scenario.data.email,
                scenario.data.password,
            );

            await expect(
                LoginPage.elementoPorTexto(
                    scenario.expectedMessage,
                ),
            ).toBeDisplayed();
        });
    }

    it('deve preencher e enviar o formulário de login com dados válidos', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Login');
        addStory('Autenticação do usuário');
        addSeverity('critical');
        addOwner('Jaqueline Fernandes de Andrade');

        await LoginPage.realizarLogin(
            loginData.valid.email,
            loginData.valid.password,
        );
    });
});
