const c = console.log.bind(document)

import Banner from './components/Banner'
import Cart from './components/Cart'
import Header from './components/Header'
import './app.scss'

import { SettingsProvider } from './settings-context.jsx'

const App = () => {

  return (
    <SettingsProvider>
    <div className="container">
      <Header />
      <Banner />
      <Cart />
  </div>
  </SettingsProvider>
  )
}

export default App
