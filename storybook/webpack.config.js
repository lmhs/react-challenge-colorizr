const config = require('../webpack.config');

module.exports = {
  module: {
    loaders: config.module.loaders,
  },

  sassResources: config.sassResources,
  postcss: config.postcss,
};
