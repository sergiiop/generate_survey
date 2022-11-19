import { API } from '.'

// export const getAll = async () => {
//   const res = await axios.get(baseUrl)
//   return res.data
// }

// export const createNewSurvey = async (content) => {
//   const survey = {
//     content,
//     important: false
//   }
//   const res = await axios.post(baseUrl, survey)
//   return res.data
// }

// export const getOneSurvey = async (id) => {
//   const res = await axios.get(`${baseUrl}/${id}`)
//   return res.data
// }

export const useGetAllSurveys = () => API.get('/surveys')

export const useCreateNewSurvey = (surveyData) =>
  API.post('/surveys', surveyData)
