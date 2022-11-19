import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { useReducers } from './reducers'

import thunk from 'redux-thunk'

const { authReducer, userReducer, surveyReducer } = useReducers()

const reducers = combineReducers({
  // surveys: combineReducers({
  //   entities: surveysReducer,
  //   status: fetchingReducer
  // }),
  authReducer,
  userReducer,
  surveyReducer
  // isLogin: loginReducer
})

export const selectedUser = (state) => {
  return state.authReducer.authData?.user
}

// export const selectStatus = state => state.user.status

// export const selectedToken = (state) => {
//   const { user } = state
//   const newToken = `Bearer ${user.token}`
//   return newToken
// }

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk))

export const store = createStore(reducers, composedEnhancers)
