import { AUTH, LOGOUT } from '../../types/types'

const initialState = {
  authData: JSON.parse(window.localStorage.getItem('userLogged'))
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      window.localStorage.setItem(
        'userLogged',
        JSON.stringify({ ...action?.data?.user })
      )
      return { ...state, authData: action?.data?.user }
    case LOGOUT:
      window.localStorage.clear()
      return { ...state, authData: null }
    default:
      return state
  }
}
