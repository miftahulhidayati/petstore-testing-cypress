import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'x834tz',
  execTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://petstore.swagger.io/v2/',
  },
});
