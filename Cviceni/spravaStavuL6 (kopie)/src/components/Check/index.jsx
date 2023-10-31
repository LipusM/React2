const c = console.log.bind(document)

import { usePrefs } from '../../prefs-context'
import './style.scss'
import classnames from 'classnames'

const Check = ({checked, onChange, isItVegan, priloha}) => {

  const {veganOnly} = usePrefs()
  c(`Priloha ${priloha}   veganOnly: ${veganOnly} isItVegan: ${isItVegan}`)

  return (
    <button 
      className={classnames("check", {"check--disabled": veganOnly && !isItVegan})}
      onClick={onChange}
      disabled={veganOnly && !isItVegan}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check