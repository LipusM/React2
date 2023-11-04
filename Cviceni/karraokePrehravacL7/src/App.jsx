const c = console.log.bind(document)

import './app.scss'
import { useState } from 'react'

import Player from './components/Player'
import Lyrics from './components/Lyrics'

import songText from "../src/lyrics-lines"

const App = () => {

  const [currentLine, setCurrentLine] = useState(0)


  return (
    <div className='container'>
        <Player src="/fools-garden-lemon-tree.mp3" lines={songText} currentLineIndex={currentLine}/>
        {/* <Lyrics lines={songText}/> */}
    </div>
  )
}

export default App
