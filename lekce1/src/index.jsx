import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Header from "./components/Header"
import List from "./components/List";
import Counter from "./components/Counter";
import Planets from "./components/Planets";

const App = () => {
  return (
    <>
      <Header title="HyperAppka" 
      description="Toto je totálně boží aplikace."
      showDescription={true}
      />

      <Planets />
      <Counter />

      <List />
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
