const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1fih66',
  e2e: {
    baseUrl:'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});
