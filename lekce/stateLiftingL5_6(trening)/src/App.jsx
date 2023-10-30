const c = console.log.bind(document)

import Banner from './components/Banner'
import Cart from './components/Cart'
import Header from './components/Header'
import './app.scss'
import { SettingsContext } from './settings-context'
import { useState } from 'react'

const App = () => {

  const [settings, setSettings] = useState({
    currency: "CZK"
  })

  const setCurrency = (newCurrency) => {
    setSettings({...settings, currency: newCurrency})
  }

  return (
  <SettingsContext.Provider value={{...settings, setCurrency}}> {/* Uzavření těch komponent, u kterých chci, aby měly přístup k tomu stavu.*/}
    <div className="container"> {/* Název contextu musí odpovídat tomu, jak jsme to nazvali v "settings-context.jsx". "Provider" dává přístup k paměti. */}
      <Header /> {/* Musím tam dát hodnotu, ke které budou mít přístup. Pomocí props "value" (vždy tento název). Lze tam dávat i callbacky. */}
      <Banner />
      <Cart />
    </div>
  </SettingsContext.Provider>
  )
}

export default App
