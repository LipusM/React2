const c = console.log.bind(document)

import './style.scss'

import { usePrefs } from '../../prefs-context'
import classnames from 'classnames'

const Check = ({checked, onChange, isItDisabled}) => {

  const {vegansOnly} = usePrefs()
  isItDisabled = vegansOnly
  c(isItDisabled)

  return (
    <button 
      className={classnames("check", {"check--disabled": !isItDisabled} )}
      onClick={onChange}
      disabled={isItDisabled}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check