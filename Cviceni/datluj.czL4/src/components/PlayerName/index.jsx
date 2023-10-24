const c = console.log.bind(document)

import "./style.scss"

import { useState, useEffect } from "react"
import classnames from "classnames"

const PlayerName = ({appearComponent}) => {
    /* const [saveResult, setSaveResult] = useState({
        name: "",
        windowAppear: true,
    })
    const {name, windowAppear} = saveResult

    const registerName = () => {
        setSaveResult(prev => ({...prev, windowAppear: false}))
        c(windowAppear)
    } */

    return(
        <div id="player-name" 
        /* className={classnames(appearComponent ? "appear" : "hide")} */>
            <input type="text" placeholder="Vaše jméno"/>
            {/* <button onClick={registerName}>Uložit výsledek</button> */}
            <button>Uložit výsledek</button>
        </div>
    )
}

export default PlayerName