import HomePage from '../pageobjects/home.page.js';
import SwipePage from '../pageobjects/swipe.page.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Swipe', () => {
    beforeEach(async () => {
        await HomePage.acessarSwipe();
    });

    it('deve abrir a tela Swipe', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Gestos Mobile');
        addStory('Abertura da tela Swipe');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(SwipePage.tituloSwipe).toBeDisplayed();
    });

    it('deve realizar swipe para esquerda', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Gestos Mobile');
        addStory('Navegação utilizando Swipe');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await SwipePage.deslizarParaEsquerda();

        await browser.pause(1500);
    });
});