import { useState } from 'react'
import { OptionComponent } from '../OptionComponent'
import { Popup } from '../Popup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewSurvey } from '../../../store/actions/surveys'

const initialState = {
  name: '',
  description: '',
  questions: []
}

const QuestionComponent = () => {
  const [survey, setSurvey] = useState(initialState)
  const [buttonQuestion, setButtonQuestion] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleButtonQuestion = () => {
    setButtonQuestion(true)
  }

  const submitQuestions = (questions) => {
    setSurvey((survey) => {
      const addQuestions = survey.questions.concat(questions)
      return {
        ...survey,
        questions: addQuestions
      }
    })
  }

  const handleChange = ({ target }) => {
    setSurvey({
      ...survey,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewSurvey(survey, navigate))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre de la encuesta</label>
      <input
        name='name'
        type='text'
        value={survey.name}
        onChange={handleChange}
      />
      <label>Descripcion de la encuesta</label>
      <input
        name='description'
        type='text'
        value={survey.description}
        onChange={handleChange}
      />
      <div className='btn-container'>
        <button type='button' onClick={handleButtonQuestion}>
          Agregar Pregunta
        </button>
      </div>
      <Popup trigger={buttonQuestion} setTrigger={setButtonQuestion}>
        <OptionComponent
          setTrigger={setButtonQuestion}
          submit={submitQuestions}
        />
      </Popup>
      {survey.questions &&
        survey.questions.length > 0 &&
        survey.questions.map((question, index) => (
          <div key={index}>
            <h1>{question.name}</h1>
            {question.type === 'combo' &&
              question.answers.map((option) => {
                return (
                  <div key={option.idx}>
                    <h2>{option.option}</h2>
                  </div>
                )
              })}
          </div>
        ))}
      <button type='submit'>Guardar encuesta</button>
    </form>
  )
}

export { QuestionComponent }
