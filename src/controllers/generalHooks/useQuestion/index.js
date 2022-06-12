import { useState } from 'react'

const useQuestion = inicial => {
  const [question, setQuestion] = useState(inicial)

  const handleChange = ({ target }) => {
    setQuestion(state => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }

  const reset = () => {
    setQuestion(inicial)
  }

  return [question, handleChange, reset]
}

export { useQuestion }
