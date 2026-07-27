# 📱 Desafio Mobile - Banco Carrefour

Projeto desenvolvido como desafio técnico de automação de testes Mobile utilizando **WebdriverIO**, **Appium** e **TypeScript**, seguindo boas práticas de organização, reutilização de código e arquitetura baseada em **Page Object Model (POM)**.

O objetivo deste projeto é demonstrar conhecimentos em automação de aplicações Android, validação de interfaces, interação com elementos nativos e execução de gestos como Swipe e Drag & Drop.

---

# 🚀 Tecnologias utilizadas

- TypeScript
- Node.js
- WebdriverIO
- Appium
- Android Studio
- Android Emulator
- Page Object Model (POM)

---

# 📂 Estrutura do Projeto

```text
desafio-mobile-banco-carrefour
│
├── config
│   └── wdio.conf.ts
│
├── test
│   ├── pageobjects
│   │   ├── BasePage.ts
│   │   ├── home.page.ts
│   │   ├── login.page.ts
│   │   ├── signup.page.ts
│   │   ├── forms.page.ts
│   │   ├── swipe.page.ts
│   │   └── drag.page.ts
│   │
│   └── specs
│       ├── app-launch.spec.ts
│       ├── login.spec.ts
│       ├── signup.spec.ts
│       ├── forms.spec.ts
│       ├── swipe.spec.ts
│       └── drag.spec.ts
│
├── package.json
└── README.md
```

---

# 📋 Cenários Automatizados

## ✅ Launch App

- Inicialização da aplicação
- Validação da Home

---

## ✅ Login

- Validação dos campos
- Login com credenciais válidas

---

## ✅ Sign Up

- Validação dos campos
- Cadastro de novo usuário

---

## ✅ Forms

- Validação dos componentes
- Preenchimento do campo texto
- Interação com elementos da tela

---

## ✅ Swipe

- Navegação até a tela
- Execução do gesto Swipe

---

## ✅ Drag & Drop

- Localização dos elementos
- Drag & Drop utilizando Actions API

---

# 🏗 Arquitetura

O projeto foi desenvolvido utilizando o padrão **Page Object Model**, separando:

- Localizadores
- Métodos de interação
- Cenários de teste

Essa arquitetura facilita:

- manutenção;
- reutilização;
- legibilidade;
- escalabilidade.

---

# ⚙️ Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js
- Java JDK
- Android Studio
- Android SDK
- Appium
- Android Emulator

---

# 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/SEU-USUARIO/desafio-mobile-banco-carrefour.git
```

Acesse a pasta:

```bash
cd desafio-mobile-banco-carrefour
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Execução dos testes

Executar todos os testes:

```bash
npm test
```

Executar apenas Login:

```bash
npm run test:login
```

Executar apenas Cadastro:

```bash
npm run test:signup
```

Executar apenas Forms:

```bash
npm run test:forms
```

Executar apenas Swipe:

```bash
npm run test:swipe
```

Executar apenas Drag:

```bash
npm run test:drag
```

Executar apenas Launch:

```bash
npm run test:launch
```

---

# 📱 Funcionalidades Automatizadas

✔ Login

✔ Cadastro

✔ Formulários

✔ Swipe

✔ Drag & Drop

✔ Navegação entre telas

✔ Validação de elementos

✔ Interação com componentes nativos

---

# 💡 Boas práticas utilizadas

- Page Object Model
- Reutilização de código
- Classe BasePage
- Métodos reutilizáveis
- Separação entre páginas e cenários
- Código em TypeScript
- Estrutura escalável

---

# 📈 Melhorias futuras

- Integração com Allure Report
- Execução em GitHub Actions
- Captura automática de screenshots em falhas
- Geração de relatórios HTML
- Testes em dispositivos reais
- Execução paralela

---

# 👩‍💻 Desenvolvido por

**Jaqueline Fernandes de Andrade**

Analista de Qualidade (QA)

Especialista em Testes Manuais e Automatizados

Tecnologias:

- Cypress
- Playwright
- Selenium
- WebdriverIO
- Appium
- JavaScript
- TypeScript
- APIs REST
- Postman
- Azure DevOps
- Git

LinkedIn:
https://www.linkedin.com/in/jaqueline-c0nnecta

GitHub:
https://github.com/jaquelineleite