import { createRoot } from 'react-dom/client';
import './style.css';

import Counter from './components/Counter';

const App = () => {
  return (
    <div className="container">
        <Counter />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
