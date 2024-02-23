const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ug39f8",
  fixturesFolder: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "./cypress/support/e2e.js",
  },
});
