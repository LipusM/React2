const c = console.log.bind(document)

import './style.scss'

import { usePrefs } from '../../prefs-context'
import classnames from 'classnames'

const Check = ({checked, onChange, isItVegan}) => {

  const {vegansOnly} = usePrefs()
  c(`vegansOnly: ${vegansOnly} isItVegan: ${isItVegan}`)

  return (
    <button 
      className={classnames("check", {"check--disabled": vegansOnly && (!isItVegan === vegansOnly)} )}
      onClick={onChange}
      disabled={vegansOnly && (!isItVegan === vegansOnly)}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check