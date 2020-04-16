module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb'],
  globals: {
    describe: true,
    expect: true,
    it: true,
    beforeEach: true,
  },
  plugins: ['vue'],
  rules: {
    'vue/no-use-v-if-with-v-for': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'prefer-destructuring': 'off',
    'vue/no-v-html': 'off',
    camelcase: 'error',
    'no-new': 'error',
    'no-unused-vars': 'error',
    'import/no-cycle': 'off',
    'max-len': ['error', { code: 160 }],
    'no-console': 'error',
    'padded-blocks': ['error', 'never'],
    'no-unused-expressions': 'error',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'Vue', // for Vue.prototype
          'config',
        ],
      },
    ],
    'no-plusplus': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'no-confusing-arrow': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'off',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
