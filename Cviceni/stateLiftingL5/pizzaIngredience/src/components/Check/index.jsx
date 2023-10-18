const c = console.log.bind(document)

import { useState } from 'react'
import './style.scss'

const Check = () => {
  const [checked, setChecked] = useState(false)
  
  const handleClick = () => {
    setChecked(!checked);
  }
  
  return (
    <button 
      className="check"
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check