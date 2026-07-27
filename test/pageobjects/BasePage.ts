import type { ChainablePromiseElement } from 'webdriverio';

export default class BasePage {

    async esperarElementoVisivel(
        elemento: ChainablePromiseElement,
        timeout = 10000
    ): Promise<void> {
        await elemento.waitForDisplayed({
            timeout,
            timeoutMsg: `Elemento não ficou visível em ${timeout}ms`
        });
    }

    async clicar(
        elemento: ChainablePromiseElement
    ): Promise<void> {
        await this.esperarElementoVisivel(elemento);
        await elemento.click();
    }

    async preencher(
        elemento: ChainablePromiseElement,
        valor: string
    ): Promise<void> {
        await this.esperarElementoVisivel(elemento);
        await elemento.clearValue();
        await elemento.setValue(valor);
    }

    async elementoEstaVisivel(
        elemento: ChainablePromiseElement
    ): Promise<boolean> {
        try {
            await this.esperarElementoVisivel(elemento);
            return true;
        } catch {
            return false;
        }
    }

    async obterTexto(
        elemento: ChainablePromiseElement
    ): Promise<string> {
        await this.esperarElementoVisivel(elemento);
        return elemento.getText();
    }
}