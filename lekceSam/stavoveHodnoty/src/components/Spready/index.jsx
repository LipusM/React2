const c = console.log.bind(document)

import "./style.scss"

const x = [1, 2, 3]
x.slice(0)

const arr1 = [1, 2, 3, 4, 5];
const sliced1 = arr1.slice(1, 4); // Vytvoří nové pole [2, 3, 4]
// Původní pole [1, 2, 3, 4, 5] zůstává nezměněno

const arr2 = [1, 2, 3, 4, 5];
const removed2 = arr2.splice(1, 3); // Odebere [2, 3, 4] z původního pole
 // Původní pole bylo změněno na [1, 5], a vrací [2, 3, 4] (odebrané prvky)


const Spready = () => {
    return (
        <>
            {c("//////////Přidání prvku na ZAČÁTEK//////////")}
            {c("1: Mutable, resp. na místě:")}
            {c(x)}

            {c("//////////Přidání prvku na KONEC//////////")}
            {c("2: Immutable")}
            {c([...x, 4])}

            {c("//////////Přidání prvku na ZADANOU pozici//////////")}
            {c("3: Přidání na zadanou pozici mutable:")}
            {x.splice(1,0,999)}
            {c(x)}

            {c("4: Přidání na zadanou pozici immutable (pomocí slice)")}
            {c([...x.slice(0, 1), 8, ...x.slice(2)])}
            {c(x)}

            {c("5: Slice")}
            {c(arr1)}
            {c(sliced1)}

            {c("6: Splice")}
            {c(arr2)}
            {c(removed2)}

            {c("//////////Odstranění prvku ze ZAČÁTKU//////////")}
        </>
    )
}

export default Spready