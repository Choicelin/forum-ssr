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

app.get('/', (req, res) => res.send(renderToString(<Home />)))

app.listen(3000, () => console.log('Example app listening on port 3000!'))