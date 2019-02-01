/**
 * reducer的定义
 */
import states from './state.js'

export default function JiSuan(state = states, action) {
  switch (action.type) {
    case 'add':
      {
        return Object.assign({}, state, { num: state.num + 1 })
      }
    case 'remove':
      {
        return {
          ...state,
          num: state.num - 1
        }
      }
    default:
      return state;
  }
}
