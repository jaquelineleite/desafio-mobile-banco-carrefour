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

    get btnSignUp() {
        return $('~button-SIGN UP');
    }

    async realizarCadastro(
        email: string,
        senha: string
    ): Promise<void> {
        await this.preencher(this.txtEmail, email);
        await this.preencher(this.txtPassword, senha);
        await this.preencher(this.txtConfirmPassword, senha);
        await this.clicar(this.btnSignUp);
    }
}

export default new SignupPage();