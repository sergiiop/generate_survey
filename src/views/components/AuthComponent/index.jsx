import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup, signin } from '../../../store/actions/auth'
import { FormContainer } from './styled'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const AuthComponent = () => {
  const [formData, setFormData] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setIsSignup((prev) => !prev)
    // setShowPassword(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    if (isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type='text'
              name='firstName'
              onChange={handleChange}
              placeholder='First Name'
            />
            <input
              type='text'
              name='lastName'
              onChange={handleChange}
              placeholder='Last Name'
            />
          </>
        )}
        <input
          type='email'
          name='email'
          onChange={handleChange}
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Password'
        />
        {isSignup && (
          <input
            type='password'
            name='confirmPassword'
            onChange={handleChange}
            placeholder='Confirm Password'
          />
        )}
        <button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <div>
        <p>
          {isSignup ? 'Already have an account?' : 'Don`t have an account?'}
          <button onClick={switchMode}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </FormContainer>
  )
}
