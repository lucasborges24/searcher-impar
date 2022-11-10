module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "keyword-spacing": [
            "error",
            { "before": true, "after": true } 
          ],
          "react/react-in-jsx-scope": "off",
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
}
