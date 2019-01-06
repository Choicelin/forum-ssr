/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 5:03 PM
 */

import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)