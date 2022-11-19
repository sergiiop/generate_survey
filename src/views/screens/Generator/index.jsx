import { useComponents } from '../../components'

const Generator = () => {
  const { QuestionComponent } = useComponents()
  return (
    <>
      <h1>Generar encuesta</h1>
      <QuestionComponent />
    </>
  )
}

export { Generator }
