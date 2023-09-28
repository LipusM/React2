const c = console.log.bind(document)

import React from 'react';
import "./style.css"

const array =  [1, 2, 3, 4, 5]

//1) Vytvořte funkci reversed, která obrátí pořadí prvků v poli.
const reversed = (array) => {
    const array1 = [...array]

    return array1.reverse()
}

//2) Vytvořte funkci remove, která obdrží pole a index. Funkce smaže prvek na zadaném indexu.
const remove = (array, index) => {
    const array1 = [...array]
    array1.splice(index, 1)

    return array1
}

//3) Vytvořte funkci swap, která obdrží pole a dva indexy. Funkce prohodí prvky na těchto indexech. 
const swap = (array, index1, index2) => {
    const array1 = [...array]

    array1[index1] = array[index2]
    array1[index2] = array[index1]

    return array1
}

const Imutabilita = () => {
    return (
        <>
            {c("1 cvičení:")}
            {c(reversed(array))}
            {c(array)}

            {c("2 cvičení:")}
            {c(remove(array, 3))}
            {c(array)}

            {c("3 cvičení:")}
            {c(swap(array, 0, 4))}
            {c(array)}
        </>
    )
}

export default Imutabilita