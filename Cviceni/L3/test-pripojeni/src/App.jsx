const c = console.log.bind(document)

import './app.scss'

import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'

const App = () => {
 

  return (
    <>
        <Navigation />
          <Outlet />
    </>
  )
}

export default App
