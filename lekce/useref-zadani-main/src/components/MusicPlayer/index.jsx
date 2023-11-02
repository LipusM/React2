import { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
			<h2>Music player</h2>
      <audio src={src} />
      <button onClick={handlePlay}>{playing ? 'stop' : 'play'}</button>
    </div>
  );
};

export default MusicPlayer;
