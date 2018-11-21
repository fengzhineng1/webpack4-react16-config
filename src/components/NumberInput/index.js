import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import './index.less'

class NumberInput extends PureComponent {

  // only input . - number, and input min ~ max
  checkInputValue = (value) => {
    const { min, max } = this.props
    const length = value.length - 1
    const lastStr = value.substr(length, 1)
    const str = value.substr(0, value.length-1)

    return (
      /(\.|\-|\d)/g.test(lastStr)
      && (min < Number(value) < max)
      && (lastStr === '-' ? !(/\-|\./g.test(str)) : true)
      && (lastStr === '.' ? !(/\./g.test(str)) : true)
    )
  }

  handleChange = (e) => {
    const value = e.target.value
    const { onChange } = this.props

    if (this.checkInputValue(value)) {
      onChange(value) 
    }
  }

  restoreBlurValue = (value) => {
    return value.replace(/((\-|\.)(?!\d))|(\-|\.)$/g, '').replace(/(?<=\d)\-/g, '')
  }

  onBlur = (e) => {
    const { value, onChange } = this.props

    const restoredValue = this.restoreBlurValue(value)
    onChange(restoredValue)
  }

  render () {
    const { min, max, value } = this.props
    return (
      <div>
        <input 
          type="text" 
          value={value}
          onChange={this.handleChange}
          onBlur={this.onBlur}
          placeholder="请输入"
        />
      </div>
    )
  }
}

NumberInput.propTypes = {
  // value: PropTypes.oneOfType([ "number", "string" ]),
  // min: PropTypes.number.isRequired,
  // max: PropTypes.number.isRequired,
  // onChange: PropTypes.func.isRequired
}

export default NumberInput
