module.exports = {
    env: {
        browser: true,
        es6: true
    },

    extends: "airbnb",

    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            legacyDecorators: true
        },
        sourceType: "module"
    },

    plugins: [
        "react",
        "react-hooks"
    ],

    parser: "babel-eslint",

    globals: {
        require: false
    },

    rules: {
        "arrow-parens": ["error", "as-needed"],
        "class-methods-use-this": "off",
        "no-return-assign": "off",
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "never",
            imports: "never",
            exports: "never",
            functions: "ignore"
        }],
        indent: ["error", 4, { SwitchCase: 1 }],
        "max-len": ["error", { code: 160 }],
        "no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
            },
            {
                selector: "LabeledStatement",
                message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
            },
            {
                selector: "WithStatement",
                message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
            }
        ],
        "no-underscore-dangle": ["off"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "symbol-description": "off",
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "off",
        "react/destructuring-assignment": ["off"],
        "react/prop-types": ["error", {
            ignore: ["dispatch", "intl"],
            customValidators: [],
            skipUndeclared: false
        }],
        "react/forbid-prop-types": ["error", {
            forbid: ["array", "any"]
        }],

        "import/extensions": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-unresolved": ["off"],
        "import/prefer-default-export": ["off"],
        "operator-linebreak": ["error", "after"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    }
};