const merge = require("webpack-merge");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.base.config");

const prodConfig = env => merge([
    {
        output: {
            path: path.resolve(__dirname, "../public")
        },
        optimization: {
            runtimeChunk: false,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            },
            minimizer: [new TerserPlugin({
                sourceMap: false
            })]
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new OptimizeCssAssetsPlugin()
        ]
    }
]);

module.exports = env => merge(baseConfig(env), prodConfig(env));
