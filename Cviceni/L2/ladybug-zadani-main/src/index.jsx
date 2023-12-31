const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
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

  /* {c(ladybugState)} */
  
  const handleKeyUp = ({ code }) => {

    if (code === 'ArrowUp') {
      /* setLadybugState(prevValue => ({...prevValue, posX: posX - STEP_SIZE, orientation: "up" }) ) */

      setLadybugState({...ladybugState, posX: ladybugState.posX - STEP_SIZE, orientation: "up"})
      c(ladybugState)
      /* setOrientation('up');
      setPosX(posX - STEP_SIZE); */
    } else if (code === 'ArrowLeft') {
      /* setLadybugState(prevValue => ({...prevValue, posY: ladybugState.posY - STEP_SIZE, orientation: "left" })) */

      setLadybugState({...ladybugState, posY: ladybugState.posY - STEP_SIZE, orientation: "left"})
      c(ladybugState)
      /* setOrientation('left');
      setPosY(posY - STEP_SIZE); */
    } else if (code === 'ArrowRight') {
      /* setLadybugState(prevValue => ({...prevValue, posY: ladybugState.posY + STEP_SIZE, orientation: "right" })) */

      setLadybugState({...ladybugState, posY: ladybugState.posY + STEP_SIZE, orientation: "right"})
      c(ladybugState)
      /* setOrientation('right');
      setPosY(posY + STEP_SIZE); */
    } else if (code === 'ArrowDown') {
      /* setLadybugState(prevValue => ({...prevValue, posX: ladybugState.posX + STEP_SIZE, orientation: "down" })) */

      setLadybugState({...ladybugState, posX: ladybugState.posX + STEP_SIZE, orientation: "down"})
      c(ladybugState)
      /* setOrientation('down');
      setPosX(posX + STEP_SIZE); */
    }

  };

  /* useEffect(() => {
    window.addEventListener("keyup",handleKeyUp)

    return () => window.removeEventListener("keyup",handleKeyUp)
  }, []) */

  return (
    <div 
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      {/* <Ladybug posX={posX} posY={posY} orientation={orientation}/> */}
      <Ladybug props={ladybugState}/>
    </div>
  );
};



createRoot(
  document.querySelector('#app'),
).render(<App />);
