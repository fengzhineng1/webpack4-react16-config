export const add = () => {
  return {
    type: 'add'
  }
}

export const remove = () => {
  return {
    type: 'remove'
  }
}

export function addCountAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(remove())
    }, 2000)
  }
}
