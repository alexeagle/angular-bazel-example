exports.config = {
  specs: ['dist/bin/test/e2e/*.spec.js'],
  capabilities:
      {browserName: 'chrome', chromeOptions: {args: ['--no-sandbox']}},
  directConnect: true,
  baseUrl: 'http://localhost:5432/src',
  framework: 'jasmine',
  getPageTimeout: 60 * 1000,
};
