import * as fs from 'node:fs';
import * as path from 'node:path';

function sanitizarNome(nome: string): string {
    return nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9-_]/g, '_');
}

export async function capturarScreenshot(
    nomeTeste: string,
): Promise<string> {
    const screenshotsDir = path.resolve(
        process.cwd(),
        'screenshots',
    );

    fs.mkdirSync(screenshotsDir, {
        recursive: true,
    });

    const arquivo = path.resolve(
        screenshotsDir,
        `${sanitizarNome(nomeTeste)}-${Date.now()}.png`,
    );

    await browser.saveScreenshot(arquivo);

    return arquivo;
}
