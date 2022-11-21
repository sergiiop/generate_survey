import { useSelector } from 'react-redux'
import { selectedUser } from '../../../store'
import { useComponents } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Auth = () => {
  const { AuthComponent } = useComponents()
  const userLogged = useSelector(selectedUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (userLogged) {
      navigate('/')
      console.log(userLogged)
    }
  }, [])

  return (
    <>
      <AuthComponent />
    </>
  )
}
