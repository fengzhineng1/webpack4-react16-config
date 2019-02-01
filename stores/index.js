import { createStore } from 'redux'
import reducers from './reducers.js'
import finalCreateStore from './configStore' // 引入store配置

let store = finalCreateStore(reducers)
export default store;
