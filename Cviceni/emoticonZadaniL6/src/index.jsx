import { createRoot } from "react-dom/client";
import "./style.css";

import Emoticon from "./components/Emoticon";
import Configurator from "./components/Configurator";
import { SettingsProvider } from "./setting-context";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vytvoř si vlastní emotikon</h1>
      </header>
      <main>
        <SettingsProvider>
          <Emoticon />
          <Configurator />
        </SettingsProvider>
      </main>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
