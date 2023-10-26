const c = console.log.bind(document)

import './style.scss'

import { usePrefs } from '../../prefs-context'
import classnames from 'classnames'

const Check = ({checked, onChange, real}) => {

  const {vegansOnly} = usePrefs()
  c(real)

  return (
    <button 
      className={classnames("check", {"check--disabled": real} )}
      onClick={onChange}
      disabled={real}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check