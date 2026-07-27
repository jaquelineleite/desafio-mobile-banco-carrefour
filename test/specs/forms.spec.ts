import HomePage from '../pageobjects/home.page.js';
import FormsPage from '../pageobjects/forms.page.js';

import {
    addEpic,
    addFeature,
    addStory,
    addSeverity,
    addOwner,
} from '@wdio/allure-reporter';

describe('Forms', () => {
    beforeEach(async () => {
        await HomePage.acessarForms();
    });

    it('deve exibir os elementos da tela de formulário', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Formulários');
        addStory('Exibição dos componentes do formulário');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        await expect(FormsPage.txtInput).toBeDisplayed();
        await expect(FormsPage.switchAtivo).toBeDisplayed();
        await expect(FormsPage.dropdown).toBeDisplayed();
        await expect(FormsPage.btnActive).toBeDisplayed();
    });

    it('deve preencher o campo de texto', async () => {
        addEpic('Banco Carrefour Mobile');
        addFeature('Formulários');
        addStory('Preenchimento do campo de texto');
        addSeverity('normal');
        addOwner('Jaqueline Fernandes de Andrade');

        const texto = 'Automação Mobile';

        await FormsPage.preencherCampo(texto);

        await expect(FormsPage.txtInput).toHaveText(texto);
    });
});