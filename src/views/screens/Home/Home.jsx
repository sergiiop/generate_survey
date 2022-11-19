import { useComponents } from '../../components'

const Home = () => {
  const { Surveys } = useComponents()
  return (
    <>
      <h3>Explore Surveys</h3>
      <section>
        <Surveys />
      </section>
    </>
  )
}

export default Home
