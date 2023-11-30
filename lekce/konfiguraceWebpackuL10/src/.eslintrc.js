module.exports = {
    env: {
        browser: true,
        es2015: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    "ignorePatterns": [".eslintrc.js"],
    extends: "eslint: recommended",
    rules:{
        "linebreak-style": "off",
        /* "no-undef": "error",
        "quotes": ["error", "double"], */
        "semi": "error",
        /* 'no-unused-vars': 'error',
        "no-console": "error",
        "no-alert": "error", */
    }
}



