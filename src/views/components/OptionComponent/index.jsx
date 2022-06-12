import { useState } from 'react'
import { Row } from '../Row'

const defaultState = {
  option: ''
}

const defaultStateQuestion = {
  name: '',
  type: '',
  answer: []
}

const OptionComponent = ({ submit, setTrigger }) => {
  const [saveOptions, setSaveOptions] = useState(false)
  const [question, setQuestion] = useState(defaultStateQuestion)

  const [options, setOptions] = useState([defaultState])

  const handleOnChange = (index, name, value) => {
    const copyOptions = [...options]
    copyOptions[index] = {
      ...copyOptions[index],
      [name]: value
    }
    setOptions(copyOptions)
  }

  const handleOnAdd = () => {
    setOptions(options.concat(defaultState))
  }

  const handleOnRemove = index => {
    const copyOptions = [...options]
    copyOptions.splice(index, 1)
    setOptions(copyOptions)
  }

  const handleChange = ({ target }) => {
    setQuestion(state => ({
      ...state,
      [target.name]: target.value
    }))
  }

  const handleSaveOptions = () => {
    setQuestion(state => ({
      ...state,
      answer: options
    }))
    setSaveOptions(true)
  }

  const handleSubmit = e => {
    e.preventDefault()

    submit(question)
    setTrigger(false)
  }

  return (
    <form onSubmit={handleSubmit}>
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
        options.map((option, index) => (
          <Row
            {...option}
            key={index}
            onChange={(name, value) => handleOnChange(index, name, value)}
            onRemove={() => handleOnRemove(index)}
          />
        ))}
      <button
        type='button'
        hidden={question.type !== 'combo'}
        onClick={handleOnAdd}
      >
        Agregar opcion
      </button>
      <button hidden={saveOptions} type='button' onClick={handleSaveOptions}>
        Guardar Opciones
      </button>
      <button hidden={!saveOptions} type='submit'>
        Guardar Pregunta
      </button>
    </form>
  )
}

export { OptionComponent }
