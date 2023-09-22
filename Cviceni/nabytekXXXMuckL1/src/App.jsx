const c = console.log.bind(document)

import './app.scss'
import { Outlet } from 'react-router-dom'

import Menu from './components/Menu'

function App() {
  

  return (
    <>
      <Menu />
        <Outlet />
    </>
  )
}

export default App
