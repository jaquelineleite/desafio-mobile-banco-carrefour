import { sharedConfig } from './wdio.shared.conf.js';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const appId = process.env.BROWSERSTACK_IOS_APP_ID;

if (!username || !accessKey || !appId) {
    throw new Error(
        'Defina BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY e BROWSERSTACK_IOS_APP_ID.'
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
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',

            'bstack:options': {
                deviceName:
                    process.env.BROWSERSTACK_IOS_DEVICE ??
                    'iPhone 15',
                platformVersion:
                    process.env.BROWSERSTACK_IOS_VERSION ??
                    '17',
                projectName: 'Banco Carrefour Mobile',
                buildName:
                    process.env.CI_PIPELINE_ID
                        ? `GitLab-${process.env.CI_PIPELINE_ID}`
                        : 'Execucao Local BrowserStack',
                debug: true,
                networkLogs: true,
            },
        },
    ],
};
