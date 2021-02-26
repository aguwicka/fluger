const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },

    {
      test: /\.pug$/,
      use: [
      "html-loader",
      "pug-html-loader"
      ]
    },
    {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          sourceMap: true
        }
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
      ]
    }
    ]
  },
  plugins: [
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.jQuery': 'jquery'
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/index.pug",
    filename: "./index.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/catalog.pug",
    filename: "./catalog.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/catalog1.pug",
    filename: "./catalog1.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/catalog2.pug",
    filename: "./catalog2.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/contacts.pug",
    filename: "./contacts.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/product1.pug",
    filename: "./product1.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/product2.pug",
    filename: "./product2.html",
    noErrorOnMissing: true
  }),
  new HtmlWebPackPlugin({
    template: "./src/template/pages/cart.pug",
    filename: "./cart.html",
    noErrorOnMissing: true
  }),
  new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  new CopyWebpackPlugin([
    { from: './src/assets/images', to: './assets/images' , noErrorOnMissing: true },
    { from: './src/assets/fonts', to: './assets/fonts' , noErrorOnMissing: true },
    ])
  ]
};