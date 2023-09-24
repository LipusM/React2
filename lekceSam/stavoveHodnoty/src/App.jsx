const c = console.log.bind(document)

import './app.scss'

import Motivace from './components/Motivace'
import Imutabilita from './components/Imutabilita'

const App = () => {


  return (
    <>
      {/* <Motivace/> */}

      <Imutabilita/>
    </>
  )
}

export default App
