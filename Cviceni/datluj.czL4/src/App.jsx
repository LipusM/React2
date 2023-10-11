const c = console.log.bind(document);

import "./app.scss";
import { useState } from "react";

import Stage from "./components/Stage";

const App = () => {

  return (
    <div className="container">
      <h1>Datlování</h1>
      <Stage />
    </div>
  )

}

export default App;
