const c = console.log.bind(document)

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {

  //Původní
/*   const [posX, setPosX] = useState(100);
  const [posY, setPosY] = useState(100);
  const [orientation, setOrientation] = useState('right'); */

  //Nové
  const [ladybugState, setLadybugState] = useState({
    posX: 100,
    posY: 100,
    orientation: "right"
  })

  {c(ladybugState)}
  
  const handleKeyUp = ({ code }) => {

    if (code === 'ArrowUp') {
      setLadybugState({...ladybugState, posX: ladybugState.posX - STEP_SIZE, orientation: "up"})
      /* setOrientation('up');
      setPosX(posX - STEP_SIZE); */
    } else if (code === 'ArrowLeft') {
      setLadybugState({...ladybugState, posY: ladybugState.posY - STEP_SIZE, orientation: "left"})
      /* setOrientation('left');
      setPosY(posY - STEP_SIZE); */
    } else if (code === 'ArrowRight') {
      setLadybugState({...ladybugState, posY: ladybugState.posY + STEP_SIZE, orientation: "right"})
      /* setOrientation('right');
      setPosY(posY + STEP_SIZE); */
    } else if (code === 'ArrowDown') {
      setLadybugState({...ladybugState, posX: ladybugState.posX + STEP_SIZE, orientation: "down"})
      /* setOrientation('down');
      setPosX(posX + STEP_SIZE); */
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
