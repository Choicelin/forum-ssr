/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 5:19 PM
 */
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../Routes'
import getStore from '../store'

export const render = (req) => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
      <title>forum ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}