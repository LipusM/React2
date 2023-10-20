const c = console.log.bind(document)

import './style.scss'

const Check = ({checked, onChange}) => {
  
  return (
    <button 
      className="check"
      onClick={onChange}
    >
      {checked ? '✓' : ''}
    </button>
  )
}

export default Check