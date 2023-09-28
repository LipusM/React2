const c = console.log.bind(document)

import React from 'react';
import "./style.css"

const ticket = { from: 'Praha', to: 'Lisabon', currency: 'EUR', price: 115 }

//1) Přidejte do objektu vlastnot duration s hodnotu 2h.

//2) Změňte vlastnost price na hodnotu 130.

const SpreadyObjektu = () => {
    return (
        <>
            {c("1 cvičení:")}
            {c({...ticket, duration: "2h"})}
            {c(ticket)}

            {c("2 cvičení:")}
            {c({...ticket, price: 130})}
            {c(ticket)}
        </>
    )
}

export default SpreadyObjektu