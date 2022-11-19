import { useState } from 'react'

// const defaultState = {
//   idx: 1,
//   option: ''
// }

const defaultStateQuestion = {
  name: '',
  type: '',
  answers: []
}

let key = 0

const OptionComponent = ({ submit, setTrigger }) => {
  // const [saveOptions, setSaveOptions] = useState(false)
  const [question, setQuestion] = useState(defaultStateQuestion)
  // const [options, setOptions] = useState([defaultState])

  function handleEdit(modifiedOption) {
    setQuestion((question) => {
      // @TODO: Should implement
      const updatedAnswers = question.answers.map((originalOption) =>
        originalOption.idx === modifiedOption.idx
          ? modifiedOption
          : originalOption
      )
      return {
        ...question,
        answers: updatedAnswers
      }
    })
  }

  const handleChange = ({ target }) => {
    setQuestion((state) => ({
      ...state,
      [target.name]: target.value
    }))
  }

  const handleRemove = (optionToRemove) => {
    setQuestion((question) => {
      const removedAnswer = question.answers.filter(
        (originalOption) => originalOption.idx !== optionToRemove.idx
      )
      return {
        ...question,
        answers: removedAnswer
      }
    })
  }

  const handleAdd = () => {
    setQuestion((question) => {
      const addAnswer = question.answers.concat({
        idx: ++key,
        option: ''
      })
      return {
        ...question,
        answers: addAnswer
      }
    })
  }

  const handleCerrar = () => {
    setTrigger(false)
  }

  const savedQuestion = () => {
    submit(question)
    setTrigger(false)
  }

  const handleSaved = () => {
    savedQuestion()
  }

  return (
    <div>
      <select name='type' value={question.type} onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='texto'>Texto</option>
        <option value='combo'>Combo</option>
      </select>
      <input
        type='text'
        name='name'
        value={question.name}
        onChange={handleChange}
      />

      {question.type === 'combo' &&
        question.answers.map((option) => (
          <div key={option.idx}>
            <input
              type='text'
              name='answers'
              value={option.option}
              placeholder='Opcion'
              onChange={(e) =>
                handleEdit({ idx: option.idx, option: e.target.value })
              }
            />
            <button onClick={() => handleRemove(option)}>Eliminar</button>
          </div>
        ))}
      <button
        type='button'
        hidden={question.type !== 'combo'}
        onClick={handleAdd}
      >
        Agregar opcion
      </button>
      <div>
        <button type='button' onClick={handleSaved}>
          Guardar Pregunta
        </button>
        <button type='button' onClick={handleCerrar}>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export { OptionComponent }
