import { Link } from 'react-router-dom'
import { useLayouts } from '../../layouts'

const Inicio = () => {
  const { PublicLayout } = useLayouts()
  return (
    <PublicLayout>
      <Link to='/generator'>Generar</Link>
      <Link to='/search'>Buscar</Link>
    </PublicLayout>
  )
}

export { Inicio }
