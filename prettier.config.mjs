/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    tabWidth: 4,
    semi: false,

    importOrder: [
        "",
        ".css$",
        "",
        "<TYPES>",
        "",
        "<BUILTIN_MODULES>",
        "",
        "^(react/(.*)$)|^(react$)",
        "",
        "^(next/(.*)$)|^(next$)",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@/(.*)$",
        "",
        "^[./]",
        "",
    ],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0",
}

export default config
