/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/5
 * Time: 9:57 AM
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(`
  <html>
    <head>
      <title>hello</title>
    </head>
    <body>
      <h1>first ssr</h1>    
      <p>hello ssr</p>
    </body>
  </html>
`))

app.listen(3000, () => console.log('Example app listening on port 3000!'))