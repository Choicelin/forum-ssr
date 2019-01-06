/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 5:19 PM
 */
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Routes from '../Routes'

export const render = (req) => {
  const reducer = (state = {name: 'choicelin'}, action) => {
    return state
  }
  const store = createStore(reducer, applyMiddleware(thunk))
  const content = renderToString(
    <Provider store={store}>
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