import React, { Component } from 'react'
const a = {x: 1}
//验证传递到父组件的元素是否是副本
export default class test extends Component {

    sendObj = () => {
      this.props.renderCom(a)
    }

    componentDidMount = () => {
      setTimeout(() => {
          console.log('a;', a)
      }, 10000);
    }

    render(){
      return (
        <div>
          click me
        </div>
      )
    }
};

