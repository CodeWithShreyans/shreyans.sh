/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:tailwindcss/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:perfectionist/recommended-natural",
    ],
    ignorePatterns: ["src/components/shadcn/*"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        project: true,
    },
    plugins: ["@typescript-eslint", "react", "perfectionist"],
    rules: {
        "@typescript-eslint/array-type": [
            "warn",
            {
                default: "array-simple",
            },
        ],
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                fixStyle: "inline-type-imports",
                prefer: "type-imports",
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            2,
            {
                checksVoidReturn: { attributes: false },
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],

        "perfectionist/sort-imports": "off",
        "perfectionist/sort-jsx-props": "off",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                reservedFirst: true,
                shorthandFirst: true,
            },
        ],
        "react/prop-types": ["error", { ignore: ["className", "sideOffset"] }],
    },
    settings: {
        tailwindcss: {
            callees: ["twmerge", "cva", "cn"],
        },
    },
}

module.exports = config
