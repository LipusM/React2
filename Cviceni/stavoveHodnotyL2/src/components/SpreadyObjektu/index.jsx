const c = console.log.bind(document)

//Zadání (všechny operace proveďte jako immutable)
const ticket = { 
    from: 'Praha', 
    to: 'Lisabon', 
    currency: 'EUR', 
    price: 115 
    }

//1) Přidejte do objektu vlastnost duration s hodnotou 2h
const ticket1 = {...ticket, duration: "2h"}

//2) Změňte vlastnost price na hodnotu 130
const ticket2 = {...ticket, price: 130}

const SpreadyObjektu = () => {
    return (
        <>
        {c("Úkol číslo 1:")}
        {c(ticket1)}
        {c(ticket)}

        {c("Úkol číslo 2:")}
        {c(ticket2)}
        {c(ticket)}
        </>
    )
}

export default SpreadyObjektu