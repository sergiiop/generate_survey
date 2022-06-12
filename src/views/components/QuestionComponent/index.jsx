import { useState } from 'react'
import { OptionComponent } from '../OptionComponent'
import { Popup } from '../Popup'

const QuestionComponent = () => {
  const [saveQuestions, setSaveQuestions] = useState(false)
  const [survey, setSurvey] = useState({
    name: '',
    description: '',
    questions: []
  })
  const [questions, setQuestions] = useState([])
  const [buttonQuestion, setButtonQuestion] = useState(false)

  const submit = question => {
    setQuestions([...questions, question])
  }

  const handleSaveQuestions = () => {
    setSurvey(state => ({
      ...state,
      questions: questions
    }))
    setSaveQuestions(true)
  }

  const handleChange = ({ target }) => {
    setSurvey({
      ...survey,
      [target.name]: target.value
    })
  }

  return (
    <>
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
        <button onClick={() => setButtonQuestion(true)}>
          Agregar Pregunta
        </button>
      </div>
      <Popup trigger={buttonQuestion} setTrigger={setButtonQuestion}>
        <OptionComponent setTrigger={setButtonQuestion} submit={submit} />
      </Popup>
      {questions &&
        questions.length > 0 &&
        questions.map((question, index) => (
          <div key={index}>
            <h1>{question.name}</h1>
            {question.type === 'combo' &&
              question.answer.map((option, index) => {
                return (
                  <div key={index}>
                    <h2>{option.option}</h2>
                  </div>
                )
              })}
          </div>
        ))}
      <button hidden={saveQuestions} onClick={handleSaveQuestions}>
        Guardar Preguntas
      </button>
      <button hidden={!saveQuestions}>Guardar Pregunta</button>
    </>
  )
}

export { QuestionComponent }
