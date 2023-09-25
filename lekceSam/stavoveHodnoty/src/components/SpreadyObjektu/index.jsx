const c = console.log.bind(document)

import "./style.scss"

const time1 = {
    hours: 5,
    mins: 21
}

const time2 = {
    hours: 15,
    mins: 25
}

const SpreadyObjektu = () => {
    return (
        <>
            {c("1: Nemodifikovaný objekt:")}
            {c(time1)}

            {c("2: Aplikace spreadu na objekt:")}
            {c({...time1, secs: 35})}

            {c("//////////")}
            {c(time2)}
            {c({...time2, hours: 10})}
            {c({hours: 10, ...time2})}
        </>
    )
}

export default SpreadyObjektu