// import { getAll } from '../../services/surveys'

import { CREATE_SURVEY, INIT_SURVEYS } from '../../types/types'

const initialState = []

export const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SURVEYS:
      return action.payload
    case CREATE_SURVEY:
      return [...state, action.payload]
    default:
      return state
  }
  // if (action.type === '@notes/init') {
  //   return action.payload
  // }

  // if (action.type === '@notes/created') {
  //   return [...state, action.payload]
  // }

  // if (action.type === '@notes/toggle_important') {
  //   const { id } = action.payload
  //   return state.map(note => {
  //     if (note.id === id) {
  //       return {
  //         ...note,
  //         important: !note.important
  //       }
  //     }
  //     return note
  //   })
  // }
  // return state
}
// // para crear una nota se necesita el content
// // export const createNote = (content) => {
// //   return async (dispatch) => {
// //     const newNote = await createNew(content)
// //     dispatch({
// //       type: '@notes/created',
// //       payload: newNote
// //     })
// //   }
// // }

// export const toggleImportantOf = (id) => {
//   return {
//     type: '@notes/toggle_important',
//     payload: {
//       id
//     }
//   }
// }

// // devuelve una funcion asyncrona
// export const initNotes = () => {
//   return async (dispatch) => {
//     const notes = await getAll()
//     dispatch({
//       type: '@notes/init',
//       payload: notes
//     })
//   }
// }

export const getSurveys = (state) => {
  return state.surveyReducer
}
