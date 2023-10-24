const c = console.log.bind(document);

import "./style.scss";

import { useState } from "react";

const PlayerName = ({ displaySubmission, nameValue }) => {

    /* const [nameValue, setNameValue] = useState("") */

  return (
    <div id="player-name">
      <span>Mimimálně tři znaky</span>
      <div id="player-values">
        <input value={nameValue} type="text" placeholder="Vaše jméno" />
        <button onClick={() => displaySubmission(nameValue)}>Uložte jméno</button>
      </div>
    </div>
  )

}

export default PlayerName;
