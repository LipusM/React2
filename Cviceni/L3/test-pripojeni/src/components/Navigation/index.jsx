const c = console.log.bind(document)

import './style.scss'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
 

  return (
    <nav>
        <NavLink to="/">Domů</NavLink>
        <NavLink to="/test">Test připojení</NavLink>
    </nav>
  )
}

export default Navigation
