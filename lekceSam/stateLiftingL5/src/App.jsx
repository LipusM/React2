const c = console.log.bind(document)

import './app.scss'

const App = () => {

  return (
    <div className="container">
      <Header />
      <Banner />
      <Cart />
    </div>
  )
}

export default App
