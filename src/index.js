/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/5
 * Time: 9:57 AM
 */

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from './containers/Home/index'

const app = express()

app.use(express.static('public'))

const content = renderToString(<Home />)

app.get('/', (req, res) => res.send(
  `
    <html>
      <head>
      <title>forum ssr</title>
      </head>
      <body>
        <div id="root">
         ${content}
        </div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
))

app.listen(3000, () => console.log('Example app listening on port 3000!'))