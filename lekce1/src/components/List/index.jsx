import React from "react";

import "./style.css"


const Day = ({day}) => {
    return (
        <li className="day">{day}</li>
    )
}


const List = () => {

    const data =[
        "pondělí",
        "úterý",
        "středa",
        "čtvrtek",
        "pátek"
    ]

    return (
        <div className="list">
            <h2>Seznam</h2>
            <ul>
                {
                    data.map(den => <Day key={den} day={den}/>)
                }
            </ul>
        </div>
    )
}

export default List