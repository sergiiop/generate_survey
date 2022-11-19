import { Link } from 'react-router-dom'
import { Container, SignUpButton } from './LoginButtons.styled'

export const LoginButtons = () => {
  return (
    <Container>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <SignUpButton>
        <Link to='/'>Sign Up</Link>
      </SignUpButton>
    </Container>
  )
}
