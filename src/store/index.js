/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 5:59 PM
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

const reducer = (state = {name: 'choicelin'}, action) => {
  return state
}

export default () => createStore(reducer, applyMiddleware(thunk))