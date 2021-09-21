const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  mode: process.env.MODE,
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      template: './src/index.html',
      inject: false
    })
  ]
};
