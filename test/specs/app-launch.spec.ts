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
        addEpic('Banco Carrefour Mobile');
        addFeature('Inicialização');
        addStory('Abertura da aplicação');
        addSeverity('blocker');
        addOwner('Jaqueline Fernandes de Andrade');

        const packageName = await driver.getCurrentPackage();

        chaiExpect(packageName).to.equal('com.wdiodemoapp');

        await expect(HomePage.abaHome).toBeDisplayed();
        await expect(HomePage.abaLogin).toBeDisplayed();
        await expect(HomePage.abaForms).toBeDisplayed();
    });
});