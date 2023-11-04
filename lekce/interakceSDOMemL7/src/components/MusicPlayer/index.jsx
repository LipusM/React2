import { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef() //Výchozí se tam přes všechna překreslení udrží

  const handlePlay = () => {
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
    <div className="music-player">
			<h2>Music player</h2>
      <audio src={src} ref={audioRef}/>
      <button onClick={handlePlay}>{playing ? 'stop' : 'play'}</button>
    </div>
  )
}

export default MusicPlayer;
