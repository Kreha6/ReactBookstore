const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');


const config = {
  entry: './src/client/client.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['style-loader', 'css-loader']),
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }
    ]
  },
  plugins: [
    ExtractTextPluginConfig
  ]
};

module.exports = merge(baseConfig, config);
