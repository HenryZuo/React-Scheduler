const webpack = require('webpack');
const { rules, loaders, plugins, stats } = require('webpack-atoms');


module.exports = {
  entry: './schedulerApp/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      rules.js({}),
      rules.images(),
      rules.woff(),
      rules.css(),
      {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader', options: {presets: ['es2015', 'react']}}}
    ],
    loaders: [{test: /\.css$/, loader:'style!css!'}]
  },
  stats: {
    colors: true
  },
  plugins: [
    plugins.extractText()
  ],
  devtool: 'source-map'
};
