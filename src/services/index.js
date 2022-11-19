import axios from 'axios'
import { BASE_URL } from '../types/types'

export const API = axios.create({ baseURL: BASE_URL })

API.interceptors.request.use((req) => {
  if (window.localStorage.getItem('userLogged')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(window.localStorage.getItem('userLogged')).token
    }`
  }

  return req
})
