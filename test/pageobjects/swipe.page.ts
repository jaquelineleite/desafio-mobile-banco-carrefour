import BasePage from './BasePage.js';

class SwipePage extends BasePage {

    get tituloSwipe() {
        return $('~Swipe');
    }

    get card() {
        return $('~card');
    }

    async deslizarParaEsquerda(): Promise<void> {
        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 900, y: 700 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 300 },
                    { type: 'pointerMove', duration: 800, x: 120, y: 700 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);

        await browser.releaseActions();
    }
}

export default new SwipePage();