# 📱 Desafio Mobile — Banco Carrefour

Projeto desenvolvido como desafio técnico de automação de testes mobile utilizando **WebdriverIO**, **Appium** e **TypeScript**, seguindo boas práticas de organização, reutilização de código e arquitetura baseada em **Page Object Model (POM)**.

O objetivo do projeto é demonstrar conhecimentos em automação de aplicações Android, validação de interfaces, interação com elementos nativos, geração de evidências e execução de gestos como **Swipe** e **Drag & Drop**.

---

## 🚀 Tecnologias utilizadas

- TypeScript
- Node.js
- WebdriverIO
- Appium
- Mocha
- Android Studio
- Android SDK
- Android Emulator
- Allure Report
- GitHub Actions
- Page Object Model

---

## 📂 Estrutura do projeto

```text
desafio-mobile-banco-carrefour
│
├── .github
│   └── workflows
│       └── ci.yml
│
├── apps
│   └── wdio-native-demo-app.apk
│
├── config
│   ├── wdio.conf.ts
│   ├── wdio.shared.conf.ts
│   └── wdio.android.conf.ts
│
├── test
│   ├── components
│   ├── constants
│   ├── data
│   ├── helpers
│   ├── pageobjects
│   ├── specs
│   └── utils
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> O arquivo APK não é versionado no repositório por ultrapassar o limite de tamanho permitido pelo GitHub.

---

## 📋 Cenários automatizados

### ✅ Inicialização da aplicação

- Inicialização do aplicativo
- Validação da tela inicial
- Validação dos principais elementos da Home

### ✅ Login

- Validação dos campos
- Preenchimento de usuário e senha
- Login com credenciais válidas
- Validação da resposta da aplicação

### ✅ Cadastro

- Validação dos campos
- Preenchimento dos dados
- Cadastro de novo usuário
- Validação da mensagem apresentada

### ✅ Formulários

- Validação dos componentes
- Preenchimento do campo de texto
- Interação com switch
- Interação com dropdown
- Validação dos valores exibidos

### ✅ Swipe

- Navegação até a tela de Swipe
- Execução do gesto
- Validação dos elementos apresentados após o movimento

### ✅ Drag & Drop

- Localização dos elementos
- Execução do Drag & Drop
- Utilização da Actions API
- Validação do resultado da interação

---

## 🧪 Cobertura dos testes

O projeto possui atualmente:

- **11 testes automatizados**
- **6 suítes de teste**
- Testes de interface
- Testes de navegação
- Validações de componentes
- Gestos mobile
- Capturas automáticas em caso de falha

---

## 🏗️ Arquitetura

O projeto utiliza o padrão **Page Object Model**, separando:

- Localizadores
- Métodos de interação
- Componentes reutilizáveis
- Dados de teste
- Helpers
- Utilitários
- Cenários automatizados

Essa estrutura facilita:

- manutenção;
- reutilização;
- legibilidade;
- escalabilidade;
- redução de código duplicado;
- evolução do framework.

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js 20 ou superior
- Java JDK
- Android Studio
- Android SDK
- Appium
- Appium UiAutomator2 Driver
- Android Emulator

Verifique as instalações:

```bash
node --version
npm --version
java --version
appium --version
```

Instale o driver Android do Appium:

```bash
appium driver install uiautomator2
```

---

## 📱 Configuração do aplicativo

O APK utilizado nos testes deve ser colocado na pasta:

```text
apps/wdio-native-demo-app.apk
```

O arquivo não está incluído no GitHub devido ao limite de tamanho para arquivos individuais.

A configuração do caminho do aplicativo está localizada nos arquivos da pasta:

```text
config/
```

---

## 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/jaquelineleite/desafio-mobile-banco-carrefour.git
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

## ▶️ Execução dos testes

Antes de executar:

1. Abra o Android Studio.
2. Inicie o emulador Android.
3. Inicie o servidor Appium, caso ele não seja iniciado automaticamente pela configuração.
4. Confirme que o APK está na pasta `apps`.

Executar todos os testes:

```bash
npm test
```

Executar somente Login:

```bash
npm run test:login
```

Executar somente Cadastro:

```bash
npm run test:signup
```

Executar somente Forms:

```bash
npm run test:forms
```

Executar somente Swipe:

```bash
npm run test:swipe
```

Executar somente Drag & Drop:

```bash
npm run test:drag
```

Executar somente Launch:

```bash
npm run test:launch
```

---

## 📊 Allure Report

O projeto possui integração com **Allure Report**, incluindo:

- Epic
- Feature
- Story
- Severity
- Owner
- Informações do ambiente
- Screenshots em caso de falha

Gerar o relatório:

```bash
npm run allure:generate
```

Abrir o relatório gerado:

```bash
npm run allure:open
```

Gerar e abrir o relatório:

```bash
npm run report
```

Também é possível utilizar:

```bash
npm run allure:serve
```

### Informações do ambiente exibidas no relatório

- Projeto: Banco Carrefour Mobile
- Plataforma: Android
- Versão do Android: 15
- Dispositivo: Pixel 5 API 35
- Automação: WebdriverIO
- Driver: Appium
- Linguagem: TypeScript
- Framework: Mocha

---

## 🔄 Integração contínua

O projeto possui uma pipeline configurada com **GitHub Actions**.

A pipeline é executada em:

- Push para a branch `main`
- Pull Request direcionado à branch `main`

Durante a execução são realizadas as etapas:

```bash
npm ci
npx tsc --noEmit
```

A validação garante que:

- as dependências sejam instaladas corretamente;
- o projeto TypeScript esteja compilando;
- erros de tipagem sejam identificados antes da integração do código.

> A execução completa dos testes mobile depende de emulador Android ou dispositivo conectado. Por isso, a pipeline atual realiza a validação estrutural e a compilação do projeto.

---

## 📱 Funcionalidades automatizadas

- ✔ Inicialização da aplicação
- ✔ Login
- ✔ Cadastro
- ✔ Formulários
- ✔ Swipe
- ✔ Drag & Drop
- ✔ Navegação entre telas
- ✔ Validação de elementos
- ✔ Interação com componentes nativos
- ✔ Evidências de falha
- ✔ Relatório Allure

---

## 💡 Boas práticas utilizadas

- Page Object Model
- Classe BasePage
- Componentes reutilizáveis
- Separação entre páginas e cenários
- Dados de teste externos
- Helpers de navegação e gestos
- Constantes centralizadas
- Utilitários de ambiente e screenshots
- Código desenvolvido em TypeScript
- Relatórios com Allure
- Validação contínua com GitHub Actions
- Estrutura preparada para expansão

---

## 📈 Melhorias futuras

- Execução dos testes em dispositivo físico
- Execução em mais versões do Android
- Execução em serviços de dispositivos na nuvem
- Testes paralelos
- Publicação automática do relatório Allure
- Integração com ferramentas de gestão de testes
- Criação de cenários para falhas de rede e interrupções
- Inclusão de testes de acessibilidade mobile

---

## 👩‍💻 Desenvolvido por

**Jaqueline Fernandes de Andrade**

Analista de Qualidade — QA

Experiência com testes manuais, automatizados, APIs e integração contínua.

### Tecnologias

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
- GitHub Actions

### Contatos

- [LinkedIn](https://www.linkedin.com/in/jaqueline-c0nnecta)
- [GitHub](https://github.com/jaquelineleite)