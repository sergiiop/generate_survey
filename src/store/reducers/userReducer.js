import { LOGOUT, SET_USER } from '../../types/types'

const userInitial = {
  user: {},
  token: ''
}

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case LOGOUT:
      window.localStorage.clear()
      return { user: null, token: null }
    default:
      return state
  }
}
