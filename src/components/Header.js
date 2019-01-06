/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/6
 * Time: 5:25 PM
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>login</Link>
    </div>
  )
}



export default connect()(Header)