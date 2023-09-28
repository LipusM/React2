import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [posX, setPosX] = useState(100);
  const [posY, setPosY] = useState(100);
  const [orientation, setOrientation] = useState('right');
  
  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      setOrientation('up');
      setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setOrientation('left');
      setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setOrientation('right');
      setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setOrientation('down');
      setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div 
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug posX={posX} posY={posY} orientation={orientation}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
