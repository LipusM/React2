const c = console.log.bind(document)

import { usePrefs } from '../../prefs-context'
import './style.scss'
import classnames from 'classnames'

const Check = ({checked, onChange}) => {

  const {veganOnly} = usePrefs()

  return (
    <button 
      className={classnames("check", {"check--disabled": veganOnly})}
      onClick={onChange}
      disabled={veganOnly}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check