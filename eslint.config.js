import antfu from '@antfu/eslint-config';

export default antfu({
  ignores: ['info/'],
  formatters: true,
  react: true,
  stylistic: {
    semi: true,
  },
  rules: {
    'antfu/top-level-function': 'off',
  },
});
