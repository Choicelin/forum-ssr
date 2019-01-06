/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 10:54 AM
 */

import express from 'express'
import { render } from "./utils"

const app = express()

app.use(express.static('public'))


app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))