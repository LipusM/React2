const c = console.log.bind(document)

// Námi vytvořené pole
const array1 = ["Jedna", "Dvě", "Tři", "Čtyři", "Pět"]

//1) Vytvořte funkci reversed, která obrátí pořadí prvků v poli.
const reversed = (array) => {
    return [...array].reverse()
}

//2) Vytvořte funkci remove, která obdrží pole a index. Funkce smaže prvek na zadaném indexu
const remove = (array, index) => {
    const newArray = [...array]
    newArray.splice(index, 1)

    return newArray
}

const Imutabilita = () => {
    return (
        <>
            {c("Úkol číslo 1:")}
            { c(reversed(array1)) }

            {c("Úkol číslo 2:")}
            { c(remove(array1, 2)) }
        </>
    )
}

export default Imutabilita