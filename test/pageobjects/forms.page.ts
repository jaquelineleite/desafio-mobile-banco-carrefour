import BasePage from './BasePage.js';

class FormsPage extends BasePage {
    get txtInput() {
        return $('~text-input');
    }

    get lblInputResult() {
        return $('~input-text-result');
    }

    get switchAtivo() {
        return $('~switch');
    }

    get dropdown() {
        return $('~Dropdown');
    }

    get btnActive() {
        return $('~button-Active');
    }

    async preencherCampo(valor: string): Promise<void> {
        await this.preencher(this.txtInput, valor);
    }

    async ativarSwitch(): Promise<void> {
        await this.clicar(this.switchAtivo);
    }

    async abrirDropdown(): Promise<void> {
        await this.clicar(this.dropdown);
    }

    async clicarBotaoActive(): Promise<void> {
        await this.clicar(this.btnActive);
    }
}

export default new FormsPage();