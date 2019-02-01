import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'


function mid1({ getState }) {
  return (next) => {
    return (action) => {
      console.log('start mid1')
      next(action)
      console.log('end mid1');
    }
  }
}
function mid2({ getState }) {
  return (next) => {
    return (action) => {
      console.log('start mid2')
      next(action)
      console.log('end mid2');
    }
  }
}
function mid3({ getState }) {
  return (next) => {
    return (action) => {
      console.log('start mid3')
      console.log('getState() :', getState());
      next(action)
      console.log('getState() :', getState());
      console.log('end mid3');
    }
  }
}
// logger
const middleware = [thunk, mid1, mid2, mid3]
const finalCreateStore = applyMiddleware(...middleware)(createStore)

export default finalCreateStore
