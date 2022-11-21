import { useCreateNewSurvey, useGetAllSurveys } from '../../services/surveys'
import { CREATE_SURVEY, INIT_SURVEYS } from '../../types/types'

export const initSurveys = () => {
  return async (dispatch) => {
    const { data } = await useGetAllSurveys()
    console.log(data)
    dispatch({
      type: INIT_SURVEYS,
      payload: data
    })
  }
}

export const createNewSurvey = (surveyData, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await useCreateNewSurvey(surveyData)
      dispatch({
        type: CREATE_SURVEY,
        data
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
}
