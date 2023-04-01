const { devices } = require('playwright');

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demoqa.com',
      colorScheme: "dark",
      video: true,
      keepVideoForPassedTests: true,
      trace: true,
      keepTraceForPassedTests: true,
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
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    autoDelay:{
      enabled: true,
      delayAfter: 3000,
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