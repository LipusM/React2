const c = console.log.bind(document);

import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./app.scss";
import { SettingsContext, SetttingsProvider } from "./settings-context";
import { useState } from "react";

const App = () => {
  /*   const [settings, setSettings] = useState({
    currency: "CZK"
  })

  const setCurrency = (newCurrency) => {
    setSettings({...settings, currency: newCurrency})
  } */

  return (
    <SetttingsProvider> {/* Uvnitř je {children} jak je definováno v "settings-context.jsx" */}
      <div className="container">
        <Header />
        <Banner />
        <Cart />
      </div>
    </SetttingsProvider>
  );
};

export default App;
