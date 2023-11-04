const c = console.log.bind(document)

import { useState, useEffect, useRef } from "react"
import classnames from "classnames"

import Lyrics from "../Lyrics"

const Player = ({src, lines, currentLineIndex}) => {

    const [playing, setPlaying] = useState(false)
    const audioRef = useRef()

    const handleMusic = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        if(playing){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [playing])

    return (
        <div className="container">
        <h1>Fools Garden: Lemon Tree</h1>
        <audio src={src} ref={audioRef}></audio>
        <div className="player-controls">
          <button onClick={handleMusic} 
          className={classnames("play-button", {
              play: !playing,
              pause: playing,
          })}></button>
        </div>
        <div className="lyrics">
{/*           <p>I'm sittin' here in the boring room</p>
          <p>It's just another rainy Sunday afternoon</p>
          <p>I'm wasting my time I got nothin' to do</p>
          <p>I'm hangin' around I'm waitin' for you</p>
          <p>But nothing ever happens and I wonder</p>
          <p>I'm drivin' around in my car</p>
          <p>I'm drivin' too fast I'm drivin' too far</p>
          <p>I'd like to change my point of view</p>
          <p>I feel so lonely I'm waitin' for you</p> */}
          <Lyrics lines={lines} currentLineIndex={currentLineIndex}/>
        </div>
      </div>
    )
}

export default Player