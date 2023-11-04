const c = console.log.bind(document)

import './app.scss'

import Player from './components/Player'

const App = () => {


  return (
    <div className='container'>
        <Player src="/fools-garden-lemon-tree.mp3"/>
    </div>
  )
}

export default App
