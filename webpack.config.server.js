const webpack           = require('webpack');
const path              = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ModuleConcatenationConfig = new webpack.optimize.ModuleConcatenationPlugin();
const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
  },
  entry: [
    './server/app.js',
  ],
  output: {
    filename: 'bundle.server.js',
    path: path.join(__dirname, './dist'),
    publicPath: './',
  },
  node: {
    net: "empty",
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'server'),path.join(__dirname, 'client')],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['style-loader', 'css-loader']),
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    ExtractTextPluginConfig,
    ModuleConcatenationConfig
  ],
};
