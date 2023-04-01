const { devices } = require('playwright');

require('dotenv').config();

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demoqa.com',
      colorScheme: "dark",
      video: false,
      keepVideoForPassedTests: false,
      trace: false,
      keepTraceForPassedTests: false,
      show: true,
      browser: 'chromium',
      chromium: {
         executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
      },
      //emulate: devices['iPhone 13 mini'],
    },
    FileSystem: {},
    MyHelper: {
      require: './custom_helpers/myhelper_helper.js'
    },
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
      fullPageScreenshots: true,
      deleteSuccessful: false,
    },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: 'p9vecc649qgz',
      output: 'stdout',
      screenshotOnFail: true,
    },
    autoDelay:{
      enabled: true,
      delayAfter: 1500,
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'demoqa_tests'
}