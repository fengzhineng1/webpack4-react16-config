import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import fetch from 'apis/fetch'
import LoginLogo from '../../assets/imgs/logo.png'
import './index.css'

class Login extends Component {
  componentDidMount() {
    // fetch('xxx.xxx', {}).then(res => {

    // })
    console.log(123)
  }

  test = () => {
    
  }

  render() {
    return (
      <div className="wrap-login">
        <div className="login-logo">
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
        </div>
        <div className="login-btn" onClick={this.test}>登录</div>
        <Button>antd-mobile</Button>
      </div>
    )
  }
}

export default Login
