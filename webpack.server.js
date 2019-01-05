/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/5
 * Time: 10:03 AM
 */

const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 保证node_modules中内容不被打包
  module: {
    rules: [{
      test: '/.js?$/',
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 3 versions']
          }
        }]]
      }
    }]
  }
}