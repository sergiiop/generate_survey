import { Container } from './Header.styled'
import Logo from './Logo'
import NavAuth from './NavAuth'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Container className='container'>
      <Logo />
      <Navbar />
      <NavAuth />
    </Container>
  )
}

export default Header
