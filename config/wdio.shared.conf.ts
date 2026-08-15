import * as path from 'node:path';

import { gerarInformacoesAmbiente } from '../test/utils/environment.util.js';
import { logger } from '../test/utils/logger.util.js';
import { capturarScreenshot } from '../test/utils/screenshot.util.js';

export const sharedConfig: WebdriverIO.Config = {
    runner: 'local',

    capabilities: [],

    specs: [
        path.resolve(process.cwd(), 'test', 'specs', '**', '*.ts'),
    ],

    exclude: [],

    maxInstances: 1,

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

    onPrepare(): void {
        gerarInformacoesAmbiente();
        logger.info('Preparando execução dos testes mobile.');
    },

    beforeSession(): void {
        logger.info('Iniciando sessão Appium/WebdriverIO.');
    },

    beforeTest(test): void {
        logger.info(`Iniciando teste: ${test.title}`);
    },

    afterTest: async function (
        test,
        _context,
        result,
    ): Promise<void> {
        if (result.passed) {
            logger.info(`Teste aprovado: ${test.title}`);
            return;
        }

        logger.error(`Teste falhou: ${test.title}`);

        const screenshot = await capturarScreenshot(
            test.title,
        );

        logger.error(
            `Screenshot da falha salvo em: ${screenshot}`,
        );
    },
};
