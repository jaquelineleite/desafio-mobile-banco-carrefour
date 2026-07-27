import BasePage from './BasePage.js';

class DragPage extends BasePage {

    get tituloDrag() {
        return $('~Drag');
    }

    get primeiroElemento() {
        return $('~drag-l1');
    }

    get primeiroDestino() {
        return $('~drop-l1');
    }

    async arrastarPrimeiroElemento(): Promise<void> {
        const origem = await this.primeiroElemento;
        const destino = await this.primeiroDestino;

        const origemLocalizacao = await origem.getLocation();
        const origemTamanho = await origem.getSize();

        const destinoLocalizacao = await destino.getLocation();
        const destinoTamanho = await destino.getSize();

        const inicioX = Math.round(
            origemLocalizacao.x + origemTamanho.width / 2
        );

        const inicioY = Math.round(
            origemLocalizacao.y + origemTamanho.height / 2
        );

        const destinoX = Math.round(
            destinoLocalizacao.x + destinoTamanho.width / 2
        );

        const destinoY = Math.round(
            destinoLocalizacao.y + destinoTamanho.height / 2
        );

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {
                    pointerType: 'touch'
                },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: inicioX,
                        y: inicioY
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    },
                    {
                        type: 'pause',
                        duration: 500
                    },
                    {
                        type: 'pointerMove',
                        duration: 1000,
                        x: destinoX,
                        y: destinoY
                    },
                    {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            }
        ]);

        await browser.releaseActions();
    }
}

export default new DragPage();