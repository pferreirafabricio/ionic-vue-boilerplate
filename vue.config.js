const path = require('path');

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Api', path.resolve(__dirname, 'src/api'))
      .set('Components', path.resolve(__dirname, 'src/components'))
      .set('Enums', path.resolve(__dirname, 'src/enums'))
      .set('Composition', path.resolve(__dirname, 'src/composition'));
  },
};
