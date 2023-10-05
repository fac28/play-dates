// eslint-disable-next-line strict
module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'kentcdodds'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};
