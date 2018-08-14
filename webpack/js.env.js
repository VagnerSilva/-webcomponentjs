const global = require('./global');

module.exports = {
  loader: 'babel-loader',
  options: {
    presets: [['env', {
      modules: false,
      targets: {
        browsers: ['>0.25%'],
      },
    }]],
    plugins: [
      'transform-decorators-legacy',
      ['transform-builtin-classes', {
        globals: global.builtin,
      }],
      'transform-custom-element-classes',
      'transform-class-properties',
      'syntax-class-properties',
      'transform-es2015-classes',

    ],
  },
};
