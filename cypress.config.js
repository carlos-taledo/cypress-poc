const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.taledo-staging.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "junit",
   reporterOptions: {
      mochaFile: "cypress/results/results.xml"
   }
});
