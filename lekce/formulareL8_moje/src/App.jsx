const c = console.log.bind(document)

import './app.scss'

import Registration from './components/Registration'
import BetterRegistration from './components/BetterRegistration'
import BestRegistration from './components/BestRegistration'

const App = () => {

  return (
    <>
      {/* <Registration /> */}
      {/* <BetterRegistration /> */}
      <BestRegistration />
    </>
  )
}

export default App
