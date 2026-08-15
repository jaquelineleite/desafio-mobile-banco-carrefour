import BasePage from './BasePage';

class SignupPage extends BasePage {
    get txtEmail() {
        return $('~input-email');
    }

    get txtPassword() {
        return $('~input-password');
    }

    get txtConfirmPassword() {
        return $('~input-repeat-password');
    }

    get abaSignUp() {
        return $("~sign-up-container");
    }

    async acessarCadastro(): Promise<void> {
        await this.clicar(this.abaSignUp);
    }

    get btnSignUp() {
        return $('~button-SIGN UP');
    }

    async realizarCadastro(
        email: string,
        senha: string,
        confirmarSenha: string = senha
    ): Promise<void> {
        await this.preencher(this.txtEmail, email);
        await this.preencher(this.txtPassword, senha);
        await this.preencher(
            this.txtConfirmPassword,
            confirmarSenha
        );
        await this.clicar(this.btnSignUp);
    }
}

export default new SignupPage();
