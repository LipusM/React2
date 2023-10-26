const c = console.log.bind(document)

import './style.scss'

import { usePrefs } from '../../prefs-context'
import classnames from 'classnames'

const Check = ({checked, onChange, isItVegan}) => {

  const {vegansOnly} = usePrefs()
  c(isItVegan)

  return (
    <button 
      className={classnames("check", {"check--disabled": vegansOnly} )}
      onClick={onChange}
      disabled={vegansOnly}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check