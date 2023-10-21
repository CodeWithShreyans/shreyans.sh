/** @type {import("eslint").Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        ecmaFeatures: { jsx: true },
    },
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:tailwindcss/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    rules: {
        "@typescript-eslint/consistent-type-definitions": "off",

        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array-simple",
            },
        ],
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-misused-promises": [
            2,
            {
                checksVoidReturn: { attributes: false },
            },
        ],

        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
    },
    settings: {
        tailwindcss: {
            callees: ["twmerge", "clsx", "cn"],
        },
    },
}

module.exports = config
