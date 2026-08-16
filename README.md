# 📱 QA Mobile Automation — WebdriverIO & Appium

[![GitHub Actions](https://github.com/jaquelineleite/desafio-mobile-banco-carrefour/actions/workflows/ci.yml/badge.svg)](https://github.com/jaquelineleite/desafio-mobile-banco-carrefour/actions/workflows/ci.yml)
[![GitLab Pipeline](https://gitlab.com/jaquelinefdeandrade/desafio-mobile-banco-carrefour/badges/main/pipeline.svg)](https://gitlab.com/jaquelinefdeandrade/desafio-mobile-banco-carrefour/-/pipelines)
![TypeScript](https://img.shields.io/badge/TypeScript-Automation-blue)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-v9-brightgreen)
![Appium](https://img.shields.io/badge/Appium-Mobile-purple)
![BrowserStack](https://img.shields.io/badge/BrowserStack-App%20Automate-orange)
![Allure](https://img.shields.io/badge/Report-Allure-yellow)

Projeto desenvolvido como solução para um desafio técnico de **Automação de Testes Mobile**, utilizando o aplicativo `native-demo-app` do WebdriverIO.

A solução utiliza **WebdriverIO + Appium + TypeScript + Mocha**, arquitetura **Page Object Model**, testes data-driven, evidências automáticas, Allure Report, GitHub Actions, GitLab CI/CD e execução remota em dispositivo Android real através do BrowserStack App Automate.

---

## ✅ Resultado da execução

A suíte possui atualmente:

- **16 cenários automatizados**
- **16 testes aprovados**
- **0 falhas**
- **0 testes ignorados**
- **100% de sucesso**
- **6 arquivos de especificação**
- execução validada no **BrowserStack App Automate**
- dispositivo: **Google Pixel 8**
- sistema operacional: **Android 14**
- execução iniciada pelo **GitLab CI/CD**

Execução de referência:

```text
Pipeline GitLab: 2763948066
Resultado: Passed
BrowserStack: Passed
Unique tests: 16
Passed: 16
Failed: 0
Skipped: 0
Success rate: 100%
```

---

## 🚀 Tecnologias utilizadas

- TypeScript
- JavaScript / Node.js
- WebdriverIO 9
- Appium
- UiAutomator2
- XCUITest
- Mocha
- Chai
- expect-webdriverio
- Page Object Model
- JSON Data-Driven Testing
- Allure Report
- BrowserStack App Automate
- Android Studio
- Android SDK
- Android Emulator
- iOS Simulator
- Git
- GitHub
- GitHub Actions
- GitLab
- GitLab CI/CD

> O projeto utiliza **TypeScript**, mantendo compatibilidade com o ecossistema JavaScript/Node.js sugerido no desafio e acrescentando tipagem estática ao framework de automação.

---

## 📂 Estrutura do projeto

```text
desafio-mobile-banco-carrefour
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── config/
│   ├── wdio.shared.conf.ts
│   ├── wdio.android.conf.ts
│   ├── wdio.ios.conf.ts
│   ├── wdio.browserstack.android.conf.ts
│   └── wdio.browserstack.ios.conf.ts
│
├── test/
│   ├── constants/
│   │   └── Messages.ts
│   ├── data/
│   │   ├── login.data.json
│   │   └── signup.data.json
│   ├── pageobjects/
│   ├── specs/
│   │   ├── app-launch.spec.ts
│   │   ├── login.spec.ts
│   │   ├── signup.spec.ts
│   │   ├── forms.spec.ts
│   │   ├── swipe.spec.ts
│   │   └── drag.spec.ts
│   └── utils/
│       ├── environment.util.ts
│       ├── logger.util.ts
│       └── screenshot.util.ts
│
├── .gitlab-ci.yml
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> O APK não é versionado no repositório. Arquivos `*.apk` permanecem ignorados pelo Git.

---

## 🧪 Cenários automatizados

### Inicialização — 1 cenário

- abre o aplicativo;
- valida a exibição do menu principal;
- utiliza Chai para validação de estado;
- valida os elementos principais com expect-webdriverio.

### Login — 4 cenários

- valida os campos da tela de Login;
- valida e-mail inválido;
- valida senha com menos de 8 caracteres;
- preenche e envia o Login com dados válidos.

Mensagens validadas:

```text
Please enter a valid email address
Please enter at least 8 characters
```

### Cadastro — 5 cenários

- valida os campos da tela de cadastro;
- valida e-mail inválido;
- valida senha com menos de 8 caracteres;
- valida confirmação de senha diferente;
- preenche e envia o cadastro com dados válidos.

Mensagens validadas:

```text
Please enter a valid email address
Please enter at least 8 characters
Please enter the same password
```

### Formulários — 2 cenários

- valida os elementos da tela de Forms;
- preenche e valida campo de texto.

### Swipe — 2 cenários

- navega até a funcionalidade Swipe;
- executa gesto horizontal através da W3C Actions API.

### Drag & Drop — 2 cenários

- abre a tela de Drag;
- executa Drag & Drop utilizando ações touch.

### Total

```text
Inicialização : 1
Login         : 4
Cadastro      : 5
Forms         : 2
Swipe         : 2
Drag & Drop   : 2
------------------
Total         : 16
```

---

## 🗃️ Data-Driven Testing

Os dados de Login e Cadastro são externalizados em arquivos JSON:

```text
test/data/login.data.json
test/data/signup.data.json
```

São utilizados conjuntos de dados para cenários válidos e inválidos, incluindo:

- credenciais válidas;
- e-mail inválido;
- senha curta;
- confirmação de senha divergente.

Essa abordagem facilita manutenção, reutilização e expansão da massa de testes.

---

## 🏗️ Page Object Model

O projeto aplica **Page Object Model (POM)** para separar responsabilidades entre:

- seletores;
- ações e interações;
- navegação;
- cenários automatizados;
- massa de dados;
- constantes;
- evidências e utilitários.

A `BasePage` centraliza operações reutilizáveis, reduzindo duplicação e facilitando a manutenção do framework.

Entre as operações centralizadas estão:

- espera de elementos;
- cliques;
- preenchimento de campos;
- leitura de textos;
- validação de visibilidade;
- localização de elementos por texto.

---

## 🤖 Android

A configuração para execução local Android está em:

```text
config/wdio.android.conf.ts
```

Configuração padrão:

```text
Android 15
Pixel 5 API 35
UiAutomator2
emulator-5554
```

O caminho do aplicativo pode ser informado pela variável:

```text
ANDROID_APP_PATH
```

Na ausência da variável, é utilizado:

```text
apps/wdio-native-demo-app.apk
```

Executar a suíte Android:

```bash
npm run test:android
```

O comando padrão `npm test` também executa a configuração Android.

---

## 🍎 iOS

O projeto possui configuração para iOS em:

```text
config/wdio.ios.conf.ts
```

A automação utiliza **Appium + XCUITest** e suporta as variáveis:

```text
IOS_DEVICE_NAME
IOS_PLATFORM_VERSION
IOS_APP_PATH
```

Executar:

```bash
npm run test:ios
```

> A execução local em iOS requer macOS, Xcode, XCUITest e um build compatível com iOS Simulator. O ambiente Codespaces/Linux utilizado no desenvolvimento não executa simuladores iOS.

---

## ☁️ BrowserStack App Automate

O projeto possui integração com **BrowserStack App Automate** para execução remota dos testes mobile.

### Android

Configuração:

```text
config/wdio.browserstack.android.conf.ts
```

Execução:

```bash
npm run test:browserstack:android
```

Configuração padrão utilizada:

```text
Google Pixel 8
Android 14
UiAutomator2
```

A suíte Android foi executada com sucesso no BrowserStack:

```text
16 passed
0 failed
0 skipped
100% success
```

### iOS

Também existe configuração BrowserStack para iOS:

```text
config/wdio.browserstack.ios.conf.ts
```

Execução:

```bash
npm run test:browserstack:ios
```

O job iOS é condicionado à existência de um aplicativo iOS compatível com dispositivo físico.

> A configuração BrowserStack iOS foi preparada, porém não foi executada durante este desafio por não haver um `.ipa` compatível disponível para a execução em dispositivo real.

Status:

```text
BrowserStack Android: implementado e executado
BrowserStack iOS: configuração preparada
```

---

## 🔐 Variáveis do BrowserStack

Nenhuma credencial do BrowserStack é versionada no projeto.

Variáveis utilizadas:

```text
BROWSERSTACK_USERNAME
BROWSERSTACK_ACCESS_KEY
BROWSERSTACK_ANDROID_APP_ID
BROWSERSTACK_IOS_APP_ID
```

Os valores são armazenados como variáveis de ambiente ou variáveis de CI/CD, sem exposição das credenciais no código-fonte.

---

## 📸 Evidências automáticas

### Screenshots

Quando um cenário falha, o hook `afterTest` captura automaticamente uma screenshot.

Diretório:

```text
screenshots/
```

Em uma execução 100% aprovada, a pasta pode permanecer vazia, pois não existem falhas para evidenciar.

### Logs

A execução gera logs em:

```text
logs/execution.log
```

São registrados eventos como início da execução, sessão, cenários aprovados, falhas e localização das evidências.

### Allure Report

O projeto possui integração com **Allure Report** e gera resultados em:

O relatório também recebe screenshots e logs de console gerados durante a execução, facilitando a investigação de falhas.

```text
allure-results/
```

As informações de ambiente são gravadas em:

```text
allure-results/environment.properties
```

Entre os dados registrados estão projeto, WebdriverIO, Appium, TypeScript, Mocha, Node.js, plataforma, dispositivo, pipeline e commit.

Gerar o relatório:

```bash
npm run allure:generate
```

Abrir o relatório:

```bash
npm run allure:open
```

Gerar e abrir:

```bash
npm run report
```

Ou servir diretamente os resultados:

```bash
npm run allure:serve
```

---

## 🔄 GitHub Actions

O projeto possui pipeline de validação estrutural em:

```text
.github/workflows/ci.yml
```

A pipeline executa:

```bash
npm ci
npx tsc --noEmit
```

É acionada em push e Pull Request para as branches configuradas no workflow.

Essa validação garante a instalação das dependências e identifica erros de TypeScript antes da integração do código.

---

## 🦊 GitLab CI/CD

O GitLab CI/CD realiza a validação do projeto e a execução dos testes mobile no BrowserStack.

Arquivo:

```text
.gitlab-ci.yml
```

Stages:

```text
validate
mobile
```

A pipeline pode ser iniciada por:

- push;
- Merge Request;
- execução manual pelo GitLab.

### Validação TypeScript

Job:

```text
validate-typescript
```

Executa:

```bash
npm ci
npm run typecheck
```

### Android no BrowserStack

Job:

```text
mobile-android-browserstack
```

O job é executado quando estão disponíveis:

```text
BROWSERSTACK_USERNAME
BROWSERSTACK_ACCESS_KEY
BROWSERSTACK_ANDROID_APP_ID
```

Comando executado:

```bash
npm run test:browserstack:android
```

### iOS no BrowserStack

Job:

```text
mobile-ios-browserstack
```

O job só é disponibilizado quando também existe:

```text
BROWSERSTACK_IOS_APP_ID
```

### Artifacts

O GitLab preserva os seguintes artifacts da execução:

```text
allure-results/
allure-report/
logs/
screenshots/
```

Os artifacts são configurados com `when: always`, permitindo preservar evidências inclusive quando uma execução apresenta falha.

---

## ⚙️ Pré-requisitos locais

### Android

- Node.js 20 ou superior;
- Java JDK;
- Android Studio;
- Android SDK;
- Android Emulator;
- Appium;
- UiAutomator2 Driver.

Verificar instalações:

```bash
node --version
npm --version
java --version
appium --version
```

Instalar o driver UiAutomator2:

```bash
appium driver install uiautomator2
```

### iOS

Para execução local em iOS também são necessários:

- macOS;
- Xcode;
- Appium XCUITest Driver;
- iOS Simulator.

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/jaquelineleite/desafio-mobile-banco-carrefour.git
```

Acesse a pasta:

```bash
cd desafio-mobile-banco-carrefour
```

Instale as dependências conforme o lock file:

```bash
npm ci
```

Valide o TypeScript:

```bash
npm run typecheck
```

---

## ▶️ Comandos disponíveis

| Execução | Comando |
|---|---|
| Android completo | `npm run test:android` |
| iOS completo | `npm run test:ios` |
| BrowserStack Android | `npm run test:browserstack:android` |
| BrowserStack iOS | `npm run test:browserstack:ios` |
| Inicialização | `npm run test:launch` |
| Login | `npm run test:login` |
| Cadastro | `npm run test:signup` |
| Forms | `npm run test:forms` |
| Swipe | `npm run test:swipe` |
| Drag & Drop | `npm run test:drag` |
| Gerar Allure | `npm run allure:generate` |
| Abrir Allure | `npm run allure:open` |

---

## 🎯 Checklist do desafio

| Requisito | Status | Implementação |
|---|---|---|
| Mínimo de 10 cenários | ✅ Concluído | 16 cenários automatizados |
| Login | ✅ Concluído | Cenários positivos e negativos |
| Cadastro | ✅ Concluído | Cenários positivos e negativos |
| Navegação entre telas | ✅ Concluído | Home, Login, Forms, Swipe e Drag |
| Formulários | ✅ Concluído | Login, Cadastro e Forms |
| Mensagens de erro | ✅ Concluído | E-mail inválido, senha curta e confirmação divergente |
| Page Object Model | ✅ Concluído | Page Objects + BasePage |
| Data-driven JSON/CSV | ✅ Opcional implementado | JSON para Login e Cadastro |
| Android | ✅ Concluído | UiAutomator2 + configuração local + BrowserStack |
| iOS | 🟡 Configurado | XCUITest + configuração para simulador |
| BrowserStack | ✅ Opcional implementado | Android executado com 16/16 testes aprovados |
| BrowserStack iOS | 🟡 Preparado | Requer IPA compatível para dispositivo real |
| Screenshots automáticos | ✅ Concluído | Captura automática em falhas |
| Resumo dos testes | ✅ Concluído | Allure + BrowserStack |
| Evidências de falha | ✅ Concluído | Screenshots + artifacts |
| Logs de execução | ✅ Concluído | `logs/execution.log` |
| Informações de ambiente | ✅ Concluído | `environment.properties` |
| Allure Report | ✅ Concluído | Results + relatório HTML |
| GitLab CI/CD | ✅ Concluído | Validação + execução Android no BrowserStack |
| Pipeline em push | ✅ Concluído | Configurada |
| Pipeline em Merge Request | ✅ Concluído | Configurada |
| Execução manual | ✅ Concluído | Pipeline aceita source `web` |
| WebdriverIO | ✅ Concluído | Versão 9 |
| Appium | ✅ Concluído | Automação mobile |
| Mocha | ✅ Concluído | Framework de testes |
| Chai | ✅ Concluído | Utilizado no cenário de inicialização |
| Git | ✅ Concluído | GitHub + GitLab |
| Documentação | ✅ Concluído | README com setup, execução, CI/CD e evidências |

---

## 💡 Boas práticas utilizadas

- Page Object Model;
- BasePage com operações reutilizáveis;
- separação entre specs e Page Objects;
- Data-Driven Testing;
- massas externas em JSON;
- constantes para mensagens;
- configuração compartilhada do WebdriverIO;
- separação de configurações Android e iOS;
- separação de execução local e BrowserStack;
- variáveis de ambiente para dados sensíveis;
- credenciais fora do código-fonte;
- screenshots automáticos em falhas;
- logs estruturados;
- Allure Report;
- informações de ambiente;
- artifacts no GitLab CI/CD;
- validação TypeScript;
- integração contínua;
- execução Android em dispositivo real no BrowserStack.

---

## 📈 Possíveis evoluções futuras

- execução BrowserStack iOS real quando houver um IPA compatível;
- matriz com múltiplos dispositivos Android e iOS;
- execução em diferentes versões dos sistemas operacionais;
- execução paralela;
- publicação automática do Allure Report;
- integração com ferramenta de gestão de testes;
- cenários de perda de rede e interrupções;
- testes de acessibilidade mobile.

---

## 🔗 Repositórios

- GitHub: https://github.com/jaquelineleite/desafio-mobile-banco-carrefour
- GitLab: https://gitlab.com/jaquelinefdeandrade/desafio-mobile-banco-carrefour

---

## 👩‍💻 Desenvolvido por

**Jaqueline Fernandes de Andrade**

Analista de Qualidade — QA

Experiência com testes manuais, automação Web, Mobile e APIs, além de integração contínua e práticas de qualidade de software.

### Contatos

- LinkedIn: https://www.linkedin.com/in/jaqueline-c0nnecta
- GitHub: https://github.com/jaquelineleite
