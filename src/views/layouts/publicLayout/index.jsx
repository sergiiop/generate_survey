import { useComponents } from '../../components'
import { MainContainer } from './styled'

const PublicLayout = ({ children }) => {
  const { Header } = useComponents()
  return (
    <>
      <Header />
      <MainContainer className='container'>{children}</MainContainer>
    </>
  )
}

export { PublicLayout }
