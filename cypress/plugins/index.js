
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {

    // allure report plugin
    allureWriter(on, config);

    // Cypress terminal output
    require('cypress-terminal-report/src/installLogsPrinter')(on);
}
