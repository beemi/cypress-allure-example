
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = (on, config) => {

    // allure report plugin
    allureWriter(on, config);

    // Terminal output plugin
    installLogsPrinter(on, {
        // onFail, always, never
        printLogsToConsole: "always",
        routeTrimLength: 500
    });
}
