const c = console.log.bind(document)

import { useState } from 'react'
import './app.scss'
import Main from './components/Main'

const App = () => {

  const [show, setShow] = useState(true)

  return (
    <div className='container'>
      <h1>Životní cyklus</h1>
      <button onClick={() => setShow(!show)}>Zobrazit / Skrýt</button>

      {show && <Main/>}
    </div>
  )
}

export default App
