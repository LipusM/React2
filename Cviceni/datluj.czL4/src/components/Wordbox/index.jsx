const c = console.log.bind(document)

import React, { useState } from 'react';
import './style.scss';

const Wordbox = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;