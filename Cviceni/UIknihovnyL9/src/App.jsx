const c = console.log.bind(document)

import "./app.scss"
import CollapseBox from "./components/CollapseBox"
import GeistTraining from "./components/GeistTraining"
import Geist from "./components/GeistTraining"

const App = () => {
  

  return (
    <>
      {/* <CollapseBox title="Zobraz podrobnosti k platbě">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta rerum repudiandae necessitatibus 
          atque, cupiditate veniam officiis magni doloribus vel!</p>
      </CollapseBox>

      <CollapseBox title="Historie">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta rerum repudiandae necessitatibus 
          atque, cupiditate veniam officiis magni doloribus vel!</p>
      </CollapseBox> */}

      <GeistTraining />
    </>
  )
}

export default App
