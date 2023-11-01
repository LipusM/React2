import { createRoot } from 'react-dom/client';
import './style.css';

import Emoticon from './components/Emoticon';
import Configurator from './components/Configurator';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vytvoř si vlastní emotikon</h1>
      </header>
      <main>
        <Emoticon />
        <Configurator />
      </main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
