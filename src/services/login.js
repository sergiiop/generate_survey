import { API } from './index'

export const useSignin = (credentials) => API.post('auth/signin', credentials)

export const useSignup = (credentials) => API.post('auth/signup', credentials)
