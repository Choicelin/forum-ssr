/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:38 AM
 */

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../Routes'
import getStore from '../store'

const App = () => {
  return (
    <Provider store={getStore()}><BrowserRouter>{Routes}</BrowserRouter></Provider>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'))