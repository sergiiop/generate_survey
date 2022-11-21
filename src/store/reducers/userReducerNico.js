// import { useLogin } from '../../services/login'
// import { asyncMac, mac, makeCrudReducer, makefetchingReducer, makeSetReducer, mat, reduceReducers } from './utils'
// // export const userLogin = makeUserReducer(['@user/login'])

// const asyncUser = mat('user')

// export const setUser = mac('@user/login', 'payload')

// const [setPending, setFulfilled, setError] = asyncMac(asyncUser)

// export const fetchingReducer = makefetchingReducer(asyncUser)

// const fulfilledReducer = makeSetReducer(['@user/fulfilled'])

// const crudReducer = makeCrudReducer(['@user/login'])

// export const userReducer = reduceReducers(crudReducer, fulfilledReducer)

// export const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case '@user/login':
//       return action.payload
//     default:
//       return state
//   }
// }

// export const userFetchLogin = (user) => {
//   return async (dispatch) => {
//     dispatch(setPending())
//     try {
//       const loginUser = await useLogin(user)
//       dispatch(setFulfilled(loginUser))
//     } catch (error) {
//       dispatch(setError(error.message))
//     }
//   }
// }

// // export const usersReducer = reduceReducers(userLogin)
