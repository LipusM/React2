const c = console.log.bind(document)

import { useState, useEffect, useRef } from "react"
import classnames from "classnames"

import Lyrics from "../Lyrics"

const Player = ({src, lines, currentLineIndex, onTimeUpdate}) => {

    const [playing, setPlaying] = useState(false)
    const audioRef = useRef()

    //Fce pro start/stop hudby
    const handleMusic = () => {
        setPlaying(!playing)
    }

    //Efekt navazující na fci handleMusic. Aktuálně provádí play/stop hudby
    useEffect(() => {
        if(playing){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [playing])

    //Fce sledující čas písničky
    const handleTimeUpdate = (e) => {
        onTimeUpdate(e.target.currentTime)
    }

    return (
        <div className="container">
        <h1>Fools Garden: Lemon Tree</h1>
        {/* <audio src={src} ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio> */}
        <audio src={src} ref={audioRef}></audio>
        <div className="player-controls">
          <button onClick={handleMusic} 
          className={classnames("play-button", {
              play: !playing,
              pause: playing,
          })}></button>
        </div>
        <div className="lyrics">
          <Lyrics lines={lines} currentLineIndex={currentLineIndex}/>
        </div>
      </div>
    )
}

export default Player