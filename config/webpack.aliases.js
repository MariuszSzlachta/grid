const path = require("path");

const APP_DIR = path.resolve(__dirname, "../client/");

module.exports.aliases = {
    Images: path.resolve(__dirname, `${APP_DIR}/assets/images`),
    App: path.resolve(__dirname, APP_DIR)
};
