module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "standard-with-typescript",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
