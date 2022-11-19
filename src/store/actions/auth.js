// import * as api from '../api'
import { useSignin, useSignup } from '../../services/login.js'
import { AUTH } from '../../types/types.js'

export const signin = (credentials, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await useSignin(credentials)
      dispatch({
        type: AUTH,
        data
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
}

// export const signin = (credentials, navigate) => async (dispatch) => {
//   try {
//     // log in the user
//     const { data } = await useSignin(credentials)
//     dispatch({ type: AUTH, data })
//     navigate('/')
//   } catch (error) {
//     console.log(error)
//   }
// }

export const signup = (credentials, navigate) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await useSignup(credentials)
    dispatch({ type: AUTH, data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
