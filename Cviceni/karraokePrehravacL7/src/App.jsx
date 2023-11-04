const c = console.log.bind(document)

import './app.scss'
import { useState } from 'react'
import Player from './components/Player'
import songText from "../src/lyrics-lines"

const App = () => {

  const [currentLine, setCurrentLine] = useState(-1)

  const handleTimeUpdate = (currentTime) => {
    const newLineIndex = songText.findIndex(line => line.time > currentTime) - 1 //Proměnná newLineIndex se nastaví na index prvního řádku v poli songText, jehož čas je větší než aktuální čas přehrávání. Od tohoto indexu se odečte 1, aby se získal index posledního řádku s časem menším než aktuální čas.
    if (newLineIndex !== currentLine) { //Kontrola, zda se nově vypočítaný index řádku liší od aktuálního indexu currentLine.
      setCurrentLine(newLineIndex) //Pokud je index jiný, aktualizuje se stav currentLine pomocí funkce setCurrentLine, což vyvolá překreslení komponent s novým aktuálním řádkem.
    }
  }

  return (
    <div className='container'>
        <Player src="/fools-garden-lemon-tree.mp3" lines={songText} currentLineIndex={currentLine} onTimeUpdate={handleTimeUpdate}/>
    </div>
  )
}

export default App
