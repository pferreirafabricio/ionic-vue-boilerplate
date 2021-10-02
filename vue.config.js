const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_CURRENT_SITE_ADDRESS
    : '/',
  devServer: {
    port: process.env.VUE_APP_PORT || '8080',
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Api', path.resolve(__dirname, 'src/api'))
      .set('Components', path.resolve(__dirname, 'src/components'))
      .set('Enums', path.resolve(__dirname, 'src/enums'))
      .set('Composition', path.resolve(__dirname, 'src/composition'));
  },
};
