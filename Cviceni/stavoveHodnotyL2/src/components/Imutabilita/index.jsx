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

//3) Vytvořte funkci swap, která obdrží pole a dva indexy. Funkce prohodí prvky na těchto indexech.
const swap = (array, index1, index2) => {
    const newArray = [...array]

    const value1 = array1[index1]
    const value2 = array1[index2]

    newArray[index1] = value2
    newArray[index2] = value1

    //Z kodim
    /* newArray[index1] = array1[index2]
    newArray[index2] = array1[index1] */
    
    return newArray
}

const Imutabilita = () => {
    return (
        <>
            {c("Úkol číslo 1:")}
            { c(reversed(array1)) }
            {c(array1)}

            {c("Úkol číslo 2:")}
            { c(remove(array1, 2)) }
            {c(array1)}

            {c("Úkol číslo 3:")}
            {c(swap(array1, 0, 4))}
            {c(array1)}
        </>
    )
}

export default Imutabilita