import { config } from "./packages/lint/base.js";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            base: config,
        },
        settings: {
            next: {
                rootDir: ["apps/*/"],
            },
        },
        rules: {
            ...config.rules,
        },
    },
];