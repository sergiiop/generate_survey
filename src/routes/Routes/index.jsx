import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'

const Routes = () => {
  const { useScreen } = useViews()
  const { Inicio, Generator, Search } = useScreen()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/generator' element={<Generator />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
