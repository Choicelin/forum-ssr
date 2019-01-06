/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:39 AM
 */

const path = require('path')

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react', ['@babel/preset-env', {
          targets: {
            browsers: ['last 3 versions']
          }
        }]],
        plugins: [
          // Stage 0
          '@babel/plugin-proposal-function-bind',

          // Stage 1
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-proposal-logical-assignment-operators',
          ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
          ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
          ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
          '@babel/plugin-proposal-do-expressions',

          // Stage 2
          ['@babel/plugin-proposal-decorators', { 'legacy': true }],
          '@babel/plugin-proposal-function-sent',
          '@babel/plugin-proposal-export-namespace-from',
          '@babel/plugin-proposal-numeric-separator',
          '@babel/plugin-proposal-throw-expressions',

          // Stage 3
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-syntax-import-meta',
          ['@babel/plugin-proposal-class-properties', { 'loose': false }],
          '@babel/plugin-proposal-json-strings'
        ]
      }
    }]
  }
}