module.exports = function (api) {
    api.cache(true);

    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-parameters",
        "@babel/plugin-transform-runtime"
    ];

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    ie: "11"
                }
            }
        ],
        "@babel/preset-react"
    ];

    return {
        plugins,
        presets
    };
};
