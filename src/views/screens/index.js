import { Generator } from './Generator'
import { Inicio } from './Inicio'
import { Search } from './Search'
import { Auth } from './Auth'
import Home from './Home'

const useScreen = () => {
  return {
    Generator,
    Inicio,
    Search,
    Auth,
    Home
  }
}

export { useScreen }
