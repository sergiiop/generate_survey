// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { selectedToken } from '../../../store'

// const baseUrl = 'http://localhost:3001/api/v1/surveys'

// export const getAllSurveys = async () => {
//   const { data } = await axios.get(baseUrl)
//   return data
// }

// export const createSurveys = (newObject) => {
//   const token = useSelector(selectedToken)
//   console.log(token)
//   const config = {
//     headers: {
//       Authorization: token
//     }
//   }
//   const request = axios.post(baseUrl, newObject, config)
//   return request.then(res => res.data)
// }

// export const updateSurvey = (id, newObject) => {
//   const token = useSelector(selectedToken)
//   console.log(token)
//   const config = {
//     headers: {
//       Authorization: token
//     }
//   }
//   const request = axios.put(`${baseUrl}/${id}`, newObject, config)
//   return request.then(res => res.data)
// }
