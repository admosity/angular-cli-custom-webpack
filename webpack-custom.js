console.log('LOADED CUSTOM WEBPACK');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'markdown-loader'
          }
        ]
      },
    ]
  },
  plugins: [

  ]
 };
