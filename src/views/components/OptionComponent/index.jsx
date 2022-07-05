import { useState } from 'react'
import { Row } from '../Row'

const defaultState = {
  idx: 1,
  option: ''
}

const defaultStateQuestion = {
  name: '',
  type: ''
}

const OptionComponent = ({ submit, setTrigger }) => {
  // const [saveOptions, setSaveOptions] = useState(false)
  const [question, setQuestion] = useState(defaultStateQuestion)
  const [options, setOptions] = useState([defaultState])

  const handleOnChange = (index, name, value) => {
    const copyOptions = [...options]
    copyOptions[index] = {
      ...copyOptions[index],
      [name]: value
    }
    setOptions(copyOptions)
    // setOptions(state => [
    //   (state[index] = {
    //     ...state[index],
    //     [name]: value
    //   })
    // ])
  }

  const handleOnAdd = () => {
    const newOption = {
      idx: options[options.length - 1].idx + 1,
      option: ''
    }
    setOptions([...options, newOption])
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

  // const handleSaveOptions = () => {
  //   setQuestion(state => ({
  //     ...state,
  //     answer: options
  //   }))
  //   setSaveOptions(true)
  // }
  const handleCerrar = () => {
    setTrigger(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    const newQuestion = Object.fromEntries(data)
    const addQuestion = {
      name: newQuestion.name,
      type: newQuestion.type,
      options
    }
    submit(addQuestion)
    handleCerrar()
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
            name={`option_${option.idx}`}
            key={option.idx}
            onRemove={() => handleOnRemove(option.idx)}
            onChange={(name, value) => handleOnChange(index, name, value)}
          />
        ))}
      <button
        type='button'
        hidden={question.type !== 'combo'}
        onClick={handleOnAdd}
      >
        Agregar opcion
      </button>
      <div>
        <button>Guardar Pregunta</button>
        <button onClick={handleCerrar}>Cancelar</button>
      </div>
    </form>
  )
}

export { OptionComponent }
