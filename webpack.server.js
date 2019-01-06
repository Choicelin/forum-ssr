/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/5
 * Time: 10:03 AM
 */

const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 保证node_modules中内容不被打包
}

module.exports = merge(config, serverConfig)