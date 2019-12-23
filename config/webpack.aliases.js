const path = require("path");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports.aliases = {
    App: path.resolve(__dirname, APP_DIR),
    Common: path.resolve(__dirname, `${APP_DIR}/common`),
    Components: path.resolve(__dirname, `${APP_DIR}/components`),
    Containers: path.resolve(__dirname, `${APP_DIR}/containers`)
};
