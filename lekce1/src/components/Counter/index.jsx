const c = console.log.bind(document)

import React, {useState} from "react";


import "./style.css"


const Counter = () => {

    const [pocet, setPocet] = useState(0)
    const handleClick = () => {
        setPocet(pocet + 1)
    }

    return (
        <div className="counter">
            {pocet}
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter