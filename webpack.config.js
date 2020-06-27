const webpack = require('webpack');

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = (env, argv) => ({
  entry: {
    main: path.resolve(__dirname, './src/js/index.js'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: argv.mode !== 'production' ? '/' : 'assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.resolve(__dirname, './src/js/'),
      templates: path.resolve(__dirname, './src/templates/')
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          //add require interpolate for multiple ico in head
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/templates/index.pug')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    // }),
  ],
  devServer: {
    historyApiFallback: true,
  },
});
