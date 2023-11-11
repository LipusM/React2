const c = console.log.bind(document)

import './app.scss'

import Registration from './components/Registration'
import BetterRegistration from './components/BetterRegistration'

const App = () => {

  return (
    <>
      {/* <Registration /> */}
      <BetterRegistration />
    </>
  )
}

export default App
