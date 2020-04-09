module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        'vue/max-attributes-per-line': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/html-indent': 0,
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/no-v-html': 'off',

        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],

        'no-unused-vars': 0,
        'no-console': 'off',
        'no-useless-escape': 'off',

        'semi': [2, 'always'],
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
    }
}

