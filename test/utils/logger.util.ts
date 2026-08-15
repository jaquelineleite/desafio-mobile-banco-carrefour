import * as fs from 'node:fs';
import * as path from 'node:path';

type LogLevel = 'INFO' | 'WARN' | 'ERROR';

function escreverLog(
    level: LogLevel,
    mensagem: string,
): void {
    const logsDir = path.resolve(
        process.cwd(),
        'logs',
    );

    fs.mkdirSync(logsDir, {
        recursive: true,
    });

    const linha = [
        new Date().toISOString(),
        level,
        mensagem,
    ].join(' | ');

    fs.appendFileSync(
        path.resolve(logsDir, 'execution.log'),
        `${linha}\n`,
        'utf-8',
    );

    console.log(linha);
}

export const logger = {
    info(mensagem: string): void {
        escreverLog('INFO', mensagem);
    },

    warn(mensagem: string): void {
        escreverLog('WARN', mensagem);
    },

    error(mensagem: string): void {
        escreverLog('ERROR', mensagem);
    },
};
