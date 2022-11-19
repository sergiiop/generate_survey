import { useDispatch, useSelector } from 'react-redux'
import { LoginButtons } from './../LoginButtons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import decode from 'jwt-decode'
import { selectedUser } from './../../../../store'
import { LOGOUT } from '../../../../types/types'
import { UserInfoContainer, UserLogContainer } from './styled'

const NavAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogged = useSelector(selectedUser)

  const logOut = () => {
    dispatch({ type: LOGOUT })
    navigate('/')
  }

  return (
    <div>
      {userLogged ? (
        <UserLogContainer>
          <p>
            Hello <UserInfoContainer>{userLogged?.name}</UserInfoContainer>
          </p>
          <button onClick={logOut}>Sign Out</button>
        </UserLogContainer>
      ) : (
        <div>
          <LoginButtons />
        </div>
      )}
    </div>
  )
}

export default NavAuth
