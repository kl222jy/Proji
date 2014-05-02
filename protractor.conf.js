exports.config = {
    allScriptsTimeout: 11000,

    // seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        'test/e2e/loginView.e2e.js',
        'test/e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome' //firefox, chrome
    },

    baseUrl: 'http://127.0.0.1:9000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: false,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    }
};