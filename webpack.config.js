const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:['css-loader','sass-loader'],
          publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'es2016', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      files: ['./dist/*.html'],
      server: { baseDir: ['dist'] }
    }),
    new CopyWebpackPlugin([
      {
        context: './src/data',
        from: '**/*',
        to: 'data'
      }
    ])
  ]
}