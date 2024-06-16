// webpack.config.js
module.exports = {
    // existing config
    module: {
      rules: [
        // existing rules
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [/node_modules\/@tensorflow-models\/coco-ssd/], // Add this line
        },
      ],
    },
  };
  