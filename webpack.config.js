const webpack = require('webpack');

const config = {
  entry: __dirname + '/static/js/index.jsx',
  output: {
  	path: __dirname + '/static/dist',
  	filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
  	extensions: ['.js', '.jsx', '.css']
  },
};

module.exports = config;