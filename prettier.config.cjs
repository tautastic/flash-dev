/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    semi: true,
    tabWidth: 4,
    printWidth: 80,
    singleQuote: false,
    trailingComma: "es5",
    arrowParens: "always",
    bracketSameLine: true,
    quoteProps: "consistent",
    singleAttributePerLine: true,
};
