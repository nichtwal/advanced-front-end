import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";


export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            env: {
                jest: true,
            },
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            "@typescript-eslint": ts,
            react,
            "react-hooks": reactHooks,
        },
        rules: {
            // Отключаем устаревшее правило
            'react/react-in-jsx-scope': 0,
            'react/jsx-uses-react': 0,

            // JavaScript
            indent: ["error", 4],
            "no-unused-vars": "warn",

            // TypeScript
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "args": "all",
                    "argsIgnorePattern": "^_",
                    "caughtErrors": "all",
                    "caughtErrorsIgnorePattern": "^_",
                    "destructuredArrayIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "ignoreRestSiblings": true
                }
            ],
            "@typescript-eslint/no-unused-expressions": "off",

            // React
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".tsx"] }],
            "react/require-default-props": "off",

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
    js.configs.recommended, // Базовые правила JS
    {
        rules: {
            ...ts.configs.recommended.rules, // TypeScript
            ...react.configs.recommended.rules, // React
        },
    },
];
