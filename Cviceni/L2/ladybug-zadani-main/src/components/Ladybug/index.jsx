/* const c = console.log.bind(document)

import React from 'react';
import './style.css';

const Ladybug = ({ posX, posY, orientation }) => {
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug; */

const c = console.log.bind(document)

import React from 'react';
import './style.css';

const Ladybug = ({props}) => {

  const {posX, posY, orientation} = props

  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;