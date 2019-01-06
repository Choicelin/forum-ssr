/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:38 AM
 */

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"

import Routes from '../Routes'


const reducer = (state = {name: 'choicelin'}, action) => {
  return state
}

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}><BrowserRouter>{Routes}</BrowserRouter></Provider>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'))