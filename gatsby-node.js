const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  const extraConfig = {
    resolve: {
      alias: {
        '@ds': path.resolve(__dirname, '../src/index.js'),
      },
    },
  };

  actions.setWebpackConfig(extraConfig);
};
