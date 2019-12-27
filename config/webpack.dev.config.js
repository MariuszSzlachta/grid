const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.base.config");


const TEMPLATE = path.resolve(__dirname, "../template");
const PUBLIC = path.resolve(__dirname, "../public");

const devConfig = env => merge([
    {
        devServer: {
            host: "localhost",
            historyApiFallback: true,
            open: true,
            hot: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${TEMPLATE}/template.html`,
                filename: "index.html"
            })
        ]
    }
]);

module.exports = env => merge(baseConfig(env), devConfig(env));
