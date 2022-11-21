import { useSelector } from 'react-redux'
import { getSurveys } from '../../../store/reducers/surveyReducer'
import Survey from './Survey'
const Surveys = () => {
  const surveys = useSelector(getSurveys)

  return !surveys.length ? (
    <div>Cargando</div>
  ) : (
    <div>
      {surveys.map((survey) => (
        <div>
          <Survey />
        </div>
      ))}
    </div>
  )
}

export default Surveys
