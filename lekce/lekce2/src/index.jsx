import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import SpreadyPoli from './components/SpreadyPoli';
import SpreadyObjektu from './components/SpreadyObjektu';
import Imutabilita from './components/Imutabilita';
import TimeDisplay from './components/TimeDisplay';
import TagCloud from './components/TagCloud';

const App = () => {
  return (
    <div className="container">

        {/* <SpreadyPoli/> */}

        {/* <SpreadyObjektu/> */}

        {/* <Imutabilita/> */}

        {/* <TimeDisplay/> */}

        <TagCloud/>

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
