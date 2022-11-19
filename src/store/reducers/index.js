import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { surveyReducer } from './surveyReducer'

export const useReducers = () => {
  return {
    authReducer,
    surveyReducer,
    userReducer
  }
}
