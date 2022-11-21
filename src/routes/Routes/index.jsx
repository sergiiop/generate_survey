import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'
import { initSurveys } from '../../store/actions/surveys'

const Routes = () => {
  const { useScreen, useLayouts } = useViews()
  const { Inicio, Generator, Search, Auth, Home } = useScreen()
  const { PublicLayout } = useLayouts()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initSurveys())
  }, [dispatch])

  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path='/' element={<Inicio />} />
          <Route path='/generator' element={<Generator />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  )
}

export { Routes }
