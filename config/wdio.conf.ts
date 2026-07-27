import * as path from 'node:path';
import * as fs from 'node:fs';

export const config: WebdriverIO.Config = {
    runner: 'local',

    specs: [
        path.resolve(process.cwd(), 'test', 'specs', '**', '*.ts'),
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',

            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Pixel 5 API 35',
            'appium:udid': 'emulator-5554',
            'appium:platformVersion': '15',

            'appium:app': path.resolve(
                process.cwd(),
                'apps',
                'wdio-native-demo-app.apk',
            ),

            'appium:autoGrantPermissions': true,
            'appium:noReset': false,
            'appium:fullReset': false,
            'appium:newCommandTimeout': 240,
        },
    ],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    address: '127.0.0.1',
                    port: 4723,
                },
            },
        ],
    ],

    framework: 'mocha',

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    onPrepare: function (): void {
        const allureResultsDir = path.resolve(
            process.cwd(),
            'allure-results',
        );

        if (!fs.existsSync(allureResultsDir)) {
            fs.mkdirSync(allureResultsDir, {
                recursive: true,
            });
        }

        const environmentProperties = [
            'Projeto=Banco Carrefour Mobile',
            'Plataforma=Android',
            'Versao_Android=15',
            'Dispositivo=Pixel 5 API 35',
            'Automacao=WebdriverIO',
            'Driver=Appium',
            'Linguagem=TypeScript',
            'Framework=Mocha',
        ].join('\n');

        fs.writeFileSync(
            path.resolve(
                allureResultsDir,
                'environment.properties',
            ),
            environmentProperties,
            'utf-8',
        );

        console.log(
            'Arquivo de ambiente do Allure criado com sucesso.',
        );
    },

    beforeSession: function (): void {
        console.log('Iniciando sessão Android com Appium');
    },

    afterTest: async function (
        test,
        _context,
        result,
    ): Promise<void> {
        if (!result.passed) {
            const screenshotsDir = path.resolve(
                process.cwd(),
                'screenshots',
            );

            if (!fs.existsSync(screenshotsDir)) {
                fs.mkdirSync(screenshotsDir, {
                    recursive: true,
                });
            }

            const testName = test.title.replace(
                /[^a-zA-Z0-9-_]/g,
                '_',
            );

            await browser.saveScreenshot(
                path.resolve(
                    screenshotsDir,
                    `${testName}-${Date.now()}.png`,
                ),
            );
        }
    },
};