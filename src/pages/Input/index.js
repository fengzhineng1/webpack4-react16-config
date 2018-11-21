import React, { Component } from 'react'
import NumberInput from 'components/NumberInput'
import './index.less'

class Input extends Component {

  state = {
    value: 12
  }

  onChange = (value) => {
    console.log('number:', value)
    this.setState({
      value
    })
  }

  test = () => {
    this.setState({
      value: 987
    })
  }

  render() {
    return (
      <div className="wrap-input">
        <NumberInput
          value={this.state.value}
          min={0}
          max={100}
          onChange={this.onChange}
        />
        <button onClick={this.onChange}>click</button>
      </div>
    )
  }
}

export default Input
