import { useLayouts } from './layouts'
import { useScreen } from './screens'
import { useComponents } from './components'

const useViews = () => {
  return {
    useLayouts,
    useScreen,
    useComponents
  }
}

export { useViews }
