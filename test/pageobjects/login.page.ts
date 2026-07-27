import BasePage from './BasePage';

class LoginPage extends BasePage {
    get txtEmail() {
        return $('~input-email');
    }

    get txtPassword() {
        return $('~input-password');
    }

    get btnLogin() {
        return $('~button-LOGIN');
    }

    async realizarLogin(
        email: string,
        senha: string
    ): Promise<void> {
        await this.preencher(this.txtEmail, email);
        await this.preencher(this.txtPassword, senha);
        await this.clicar(this.btnLogin);
    }
}

export default new LoginPage();