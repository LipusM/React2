const c = console.log.bind(document)

import "./style.scss"

const x = [1, 2, 3]
x.push(8)
x[0] = 5

const time = {hours: 5, mins: 21}
time.hours = 8
time.secs = 35

const name = "Petr Novák"
name.toUpperCase()
name.replace("Ahoj")
name.trim()

const Imutabilita = () => {
    return (
        <>
            {c("Pole:")}
            {c(x)}

            {c("Objekty:")}
            {c(time)}

            {c("Řetězce:")}
            {c(name)}
        </>
    )
}

export default Imutabilita