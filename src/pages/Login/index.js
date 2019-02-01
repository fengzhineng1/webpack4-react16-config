import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import { Link } from "react-router-dom";
import Loadable from 'react-loadable';
// import fetch from 'apis/fetch'
import LoginLogo from '../../assets/imgs/logo.png'
import './index.less'

import { connect } from 'react-redux'
import { add, addCountAsync } from '../../../stores/actions.js'

class Login extends Component {

  state = {

  }

  add = () => {
    this.props.dispatch({
      type: 'add'
    })
  }

  remove = () => {
    this.props.dispatch({
      type: 'remove'
    })
  }
  render() {
    return (
      <div className="wrap-login">
        {/* <div className="login-logo" onClick={this.test1}>
          <img src={LoginLogo} />
        </div>
        <div className="login-wrap-input">
          <div>
            <input className="phone-input" type="phone" name="phone" placeholder="请输入电话号码" />
          </div>
          <div className="login-boundary" />
          <div>
            <input className="password-input" type="password" name="password" placeholder="请输入密码" />
          </div>
        </div> */}
        <div className="login-btn" onClick={this.add}>点击我+</div>
        <div style={{ marginTop: '20px' }} className="login-btn" onClick={this.remove}>点击我-</div>
        <div style={{ position: 'relative', top: '300px', left: '50%' }}>{this.props.num}</div>
        {/* <Button onClick={this.test}>antd-mobile</Button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
