import { useState } from 'react'
import { OptionComponent } from '../OptionComponent'
import { Popup } from '../Popup'

const QuestionComponent = () => {
  // const [saveQuestions, setSaveQuestions] = useState(false)
  const [surveis, setSurveis] = useState([])
  const [survey, setSurvey] = useState({
    name: '',
    description: ''
  })
  const [questions, setQuestions] = useState([])
  const [buttonQuestion, setButtonQuestion] = useState(false)

  const handleButtonQuestion = () => {
    setButtonQuestion(true)
  }
  const submitQuestions = question => {
    setQuestions([...questions, question])
  }

  // const handleSaveQuestions = () => {
  //   setSurvey(state => ({
  //     ...state,
  //     questions: questions
  //   }))
  //   setSaveQuestions(true)
  // }

  const handleChange = ({ target }) => {
    setSurvey({
      ...survey,
      [target.name]: target.value
    })
  }

  const handleSubmit = () => {
    const newSurvey = {
      name: survey.name,
      description: survey.description,
      questions
    }
    setSurveis([...surveis, newSurvey])
  }
  console.log(surveis)

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
        <button onClick={handleButtonQuestion}>Agregar Pregunta</button>
      </div>
      <Popup trigger={buttonQuestion} setTrigger={setButtonQuestion}>
        <OptionComponent
          setTrigger={setButtonQuestion}
          submit={submitQuestions}
        />
      </Popup>
      {questions &&
        questions.length > 0 &&
        questions.map((question, index) => (
          <div key={index}>
            <h1>{question.name}</h1>
            {question.type === 'combo' &&
              question.options.map(option => {
                return (
                  <div key={option.idx}>
                    <h2>{option.option}</h2>
                  </div>
                )
              })}
          </div>
        ))}
      <button onClick={handleSubmit}>Guardar encuesta</button>
    </>
  )
}

export { QuestionComponent }
