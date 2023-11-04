const c = console.log.bind(document)

import './app.scss'

import Player from './components/Player'
import Lyrics from './components/Lyrics'

import songText from "../src/lyrics-lines"

const App = () => {


  return (
    <div className='container'>
        <Player src="/fools-garden-lemon-tree.mp3" lines={songText}/>
        {/* <Lyrics lines={songText}/> */}
    </div>
  )
}

export default App
