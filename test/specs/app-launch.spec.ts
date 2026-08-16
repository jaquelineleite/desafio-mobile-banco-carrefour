import HomePage from '../pageobjects/home.page.js';
import { expect as chaiExpect } from 'chai';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Inicialização do aplicativo', () => {
    it('deve abrir o aplicativo e exibir o menu principal', async () => {
        addEpic('Desafio Mobile - Banco Carrefour');
        addFeature('Inicialização');
        addStory('Abertura da aplicação');
        addSeverity('blocker');
        addOwner('Jaqueline Fernandes de Andrade');

        const menuPrincipalVisivel =
            await HomePage.menuPrincipalEstaVisivel();

        chaiExpect(menuPrincipalVisivel).to.equal(true);

        await expect(HomePage.abaHome).toBeDisplayed();
        await expect(HomePage.abaLogin).toBeDisplayed();
        await expect(HomePage.abaForms).toBeDisplayed();
    });
});