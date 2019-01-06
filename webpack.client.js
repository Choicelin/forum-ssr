/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:39 AM
 */

const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(config, clientConfig)