
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {

    // allure report plugin
    allureWriter(on, config);
}
