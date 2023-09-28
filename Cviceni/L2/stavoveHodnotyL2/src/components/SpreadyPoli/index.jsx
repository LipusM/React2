const c = console.log.bind(document)

import "./style.scss"


//Zadání (všechny operace proveďte jako immutable)
const names = ['jana', 'pavel', 'eva', 'jitka', 'radek', 'zuzka', 'ondra']

// 1) Přidejte na konec pole hodnotu "hanka"
const names1 = [...names, "hanka"]

// 2) Přidejte na začátek hodnotu "romana"
const names2 = ["romana", ...names]

// 3) Vytvořte čiskou kopii pole
const names3 = [...names]

// 4) Odstraňte poslední prvek pole
/* const names4 = [...names] */
/* const names4 = names.slice(0, -1) */
const names5 = [...names]
names5.pop()

// 5) Odstraňte z pole hodnotu na třetím indexu
/* const names6 =[...names.slice(0, 2), ...names.slice(3, -1)] */
const names7 = [...names]
names7.splice(3,1)

const SpreadyPoli = () => {
    return (
        <>
            {c("Úkol číslo 1:")}
            {c(names1)}
            {c(names)}

            {c("Úkol číslo 2:")}
            {c(names2)}
            {c(names)}

            {c("Úkol číslo 3:")}
            {c(names3)}

            {c("Úkol číslo 4:")}
            {/* {c(names4.slice(0, -1))} */}
            {/* {c(names4)} */}
            {c(names5)}

            {c("Úkol číslo 5:")}
            {/* {c(names6)} */}
            {c(names7)}
        </>
    )
}

export default SpreadyPoli