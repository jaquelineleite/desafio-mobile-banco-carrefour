import * as path from 'node:path';
import { sharedConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...sharedConfig,

    capabilities: [
        {
            platformName: 'iOS',

            'appium:automationName': 'XCUITest',
            'appium:deviceName':
                process.env.IOS_DEVICE_NAME ?? 'iPhone 15',
            'appium:platformVersion':
                process.env.IOS_PLATFORM_VERSION ?? '17.5',

            'appium:app':
                process.env.IOS_APP_PATH ??
                path.resolve(
                    process.cwd(),
                    'apps',
                    'wdio-native-demo-app.app',
                ),

            'appium:autoAcceptAlerts': true,
            'appium:noReset': false,
            'appium:fullReset': false,
            'appium:newCommandTimeout': 240,
        },
    ],
};
