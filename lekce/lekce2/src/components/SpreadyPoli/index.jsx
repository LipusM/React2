const c = console.log.bind(document)

import React from 'react';
import "./style.css"

const names = ['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']
//1) Přidejte na konec pole hodnotu 'hanka'.

//2) Přidejte na začátek pole hodnotu 'romana'.

//3) Vytvořte čistou kopii pole.

//4) Odstraňte poslední prvek pole. 
const names2 =[...names]
names2.splice(-1, 1)

//5) Odstraňte z pole hodnotu na třetím indexu.
const names3 = [...names]
names3.splice(3, 1)

const SpreadyPoli = () => {
    return (
        <>
            {c("1 cvičení:")}
            {c([...names, "hanka"])}

            {c("2 cvičení:")}
            {c(["romana", ...names])}

            {c("3 cvičení:")}
            {c([...names])}

            {c("4 cvičení:")}
            {c(names2)}

            {c("5 cvičení:")}
            {c(names3)}
        </>
    )
}

export default SpreadyPoli