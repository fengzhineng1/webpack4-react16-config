import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child.js';
import './index.css'

class Modal extends Component {
  
}

const themeObj = {
  light: {
    background: 'green'
  },
  dark: {
    background: 'blue'
  }
}

const { Provider, Consumer } = React.createContext({ 
  them: themeObj.light,
  toggleTheme: () => { console.log(123) }
 })

function ThemBtn(props) {
  return (
    <>
      <Consumer>
        {
          ({ them, toggleTheme }) => (
            <button {...props} onClick={toggleTheme} style={{ backgroundColor: them.background, color: 'red' }}>
              {them.background}123
            </button>
          )
        }
      </Consumer>
    </>
  )
}

function Tool(props) {
  return (
    <ThemBtn {...props} />
  )
}

class Home extends Component {

  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      const { them } = this.state
      this.setState({
        them: them === themeObj.light ? themeObj.dark : themeObj.light
      })
    }

    this.state = {
      them: themeObj.light,
      toggleTheme: this.toggleTheme
    }
  }

  componentDidMount = () => {
    ReactDOM.createPortal('123', document.getElementById('app'))
  }
  


  render() {
    return (
        <Provider value={this.state}>
          <Tool />
        </Provider>
    )
  }
}

export default Home
