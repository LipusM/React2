const c = console.log.bind(document)

import Banner from './components/Banner'
import Cart from './components/Cart'
import Header from './components/Header'
import './app.scss'

import { SettingsContext } from './settings-context.js'

const App = () => {

  return (
    <SettingsContext.Provider value={{currency: "CZK"}}>
    <div className="container">
      <Header />
      <Banner />
      <Cart />
  </div>
  </SettingsContext.Provider>
  )
}

export default App
