/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 2019/1/5
 * Time: 9:58 AM
 */

import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'

const Home = (props) => {
  return (<div>
    <Header />
    home! {props.name}
  </div>)
}

const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home)
