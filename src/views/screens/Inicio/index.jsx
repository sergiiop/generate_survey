// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useControllers } from '../../../controllers'
import { HeroImg, MainContainer, Title } from './styled'
import { useIcons } from './../../../assets/icons/index'

const Inicio = () => {
  // const { useComponentHooks } = useControllers()
  // const { getAllSurveys } = useComponentHooks()

  // useEffect(() => {
  //   getAllSurveys().then((surveys) => {
  //     setSurveys(surveys)
  //   })
  // }, [])

  const { Hero } = useIcons()

  return (
    <MainContainer>
      <div>
        <Title>Create your own survey free</Title>
        <Link to='/generator'>Crear</Link>
        <Link to='/home'>View all surveys</Link>
      </div>
      <HeroImg>
        <img src={Hero} />
      </HeroImg>
    </MainContainer>
  )
}

export { Inicio }
