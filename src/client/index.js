/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:38 AM
 */

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'

const App = () => {
  return (
    <BrowserRouter>{Routes}</BrowserRouter>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'))