import HomePage from '../pageobjects/home.page.js';
import DragPage from '../pageobjects/drag.page.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Drag & Drop', () => {
    beforeEach(async () => {
        await HomePage.acessarDrag();
    });

    it('deve abrir a tela Drag', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Gestos Mobile');
        addStory('Abertura da tela Drag');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(DragPage.tituloDrag).toBeDisplayed();
    });

    it('deve arrastar o primeiro elemento para o destino', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Gestos Mobile');
        addStory('Interação utilizando Drag and Drop');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(DragPage.primeiroElemento).toBeDisplayed();
        await expect(DragPage.primeiroDestino).toBeDisplayed();

        await DragPage.arrastarPrimeiroElemento();

        await browser.pause(1500);
    });
});