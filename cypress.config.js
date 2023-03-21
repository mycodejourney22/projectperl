const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  require('cypress-mochawesome-reporter/plugin')(on)
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/cypressAutomation/*.feature'
  },
  chromeWebSecurity: true,
  video: false,
  defaultCommandTimeout: 8000,


  env: {
    url: "https://www.perlego.com/"
  },

});
