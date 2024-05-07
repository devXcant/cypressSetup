const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Specifying the specPattern as a string or an array of strings
    specPattern: 'cypress/e2e/**/*.cy.js', // Example pattern, adjust as needed
  },
});
