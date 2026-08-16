import { sharedConfig } from './wdio.shared.conf.js';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const appId = process.env.BROWSERSTACK_ANDROID_APP_ID;

if (!username || !accessKey || !appId) {
    throw new Error(
        'Defina BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY e BROWSERSTACK_ANDROID_APP_ID.'
    );
}

export const config: WebdriverIO.Config = {
    ...sharedConfig,

    user: username,
    key: accessKey,
    hostname: 'hub.browserstack.com',

    services: [
        [
            'browserstack',
            {
                app: appId,
            },
        ],
    ],

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',

            'bstack:options': {
                deviceName:
                    process.env.BROWSERSTACK_ANDROID_DEVICE ??
                    'Google Pixel 8',
                platformVersion:
                    process.env.BROWSERSTACK_ANDROID_VERSION ??
                    '14.0',
                projectName: 'Desafio Mobile - Banco Carrefour',
                buildName:
                    process.env.CI_PIPELINE_ID
                        ? `GitLab CI - Android - ${process.env.CI_PIPELINE_ID}`
                        : 'BrowserStack Local - Android',
                debug: true,
                networkLogs: true,
            },
        },
    ],
};
