const c = console.log.bind(document)

import Banner from './components/Banner'
import Cart from './components/Cart'
import Header from './components/Header'
import './app.scss'
import { SettingsContext } from './settings-context'

const App = () => {

  return (
  <SettingsContext.Provider value={{ currency: "CZK" }}> {/* Uzavření těch komponent, u kterých chci, aby měly přístup k tomu stavu.*/}
    <div className="container"> {/* Název contextu musí odpovídat tomu, jak jsme to nazvali v "settings-context.jsx". "Provider" dává přístup k paměti. */}
      <Header /> {/* Musím tam dát hodnotu, ke které budou mít přístup. Pomocí props "value" (vždy tento název). */}
      <Banner />
      <Cart />
    </div>
  </SettingsContext.Provider>
  )
}

export default App
