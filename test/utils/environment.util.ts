import * as fs from 'node:fs';
import * as path from 'node:path';

export function gerarInformacoesAmbiente(): void {
    const allureResultsDir = path.resolve(
        process.cwd(),
        'allure-results',
    );

    fs.mkdirSync(allureResultsDir, {
        recursive: true,
    });

    const environmentProperties = [
        'Projeto=QA Mobile Automation - WebdriverIO & Appium',
        'Automacao=WebdriverIO',
        'Driver=Appium',
        'Linguagem=TypeScript',
        'Framework=Mocha',
        `Node=${process.version}`,
        `Plataforma=${process.env.TEST_PLATFORM ?? 'definida pela capability WebdriverIO'}`,
        `Dispositivo=${process.env.TEST_DEVICE ?? 'definido pela capability WebdriverIO'}`,
        `Versao_Plataforma=${process.env.TEST_PLATFORM_VERSION ?? 'definida pela capability WebdriverIO'}`,
        `Tipo_Execucao=${process.env.CI ? 'CI/CD' : 'Local'}`,
        `Pipeline=${process.env.CI_PIPELINE_ID ?? 'local'}`,
        `Commit=${process.env.CI_COMMIT_SHORT_SHA ?? 'local'}`,
    ].join('\n');

    fs.writeFileSync(
        path.resolve(
            allureResultsDir,
            'environment.properties',
        ),
        environmentProperties,
        'utf-8',
    );
}
