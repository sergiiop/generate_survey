import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'

const Generator = () => {
  const { PublicLayout } = useLayouts()
  const { QuestionComponent } = useComponents()
  return (
    <PublicLayout>
      <h1>Generar encuesta</h1>
      <QuestionComponent />
    </PublicLayout>
  )
}

export { Generator }
