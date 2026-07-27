import BasePage from './BasePage.js';

class HomePage extends BasePage {
    get abaHome() {
        return $('~Home');
    }

    get abaWebview() {
        return $('~Webview');
    }

    get abaLogin() {
        return $('~Login');
    }

    get abaForms() {
        return $('~Forms');
    }

    get abaSwipe() {
        return $('~Swipe');
    }

    get abaDrag() {
        return $('~Drag');
    }

    async acessarLogin(): Promise<void> {
        await this.clicar(this.abaLogin);

    }

    async acessarForms(): Promise<void> {
        await this.clicar(this.abaForms);
    }

    async acessarSwipe(): Promise<void> {
        await this.clicar(this.abaSwipe);
    }

    async acessarDrag(): Promise<void> {
        await this.clicar(this.abaDrag);
    }

    async menuPrincipalEstaVisivel(): Promise<boolean> {
        return this.elementoEstaVisivel(this.abaHome);
    }
}

export default new HomePage();