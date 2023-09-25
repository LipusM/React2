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

const time3 = {
    hours: 5,
    mins: 21
}

 

const SpreadyObjektu = () => {
    
    return (
        <>
            {c("3: //////////")}
            {c("1: Nemodifikovaný objekt:")}
            {c(time1)}

            {c("2: Aplikace spreadu na objekt:")}
            {c({...time1, secs: 35})}

            {c("2: //////////")}
            {c(time2)}
            {c({...time2, hours: 10})}
            {c({hours: 10, ...time2})}

            {c("3: //////////")}
            {c(time3)}
            {time3.hours = 10}
            {time3.secs = 35}
            {c(time3)}

            {/* {{ ...time3, hours: 10, secs: 35 }} */}

        </>
    )
}

export default SpreadyObjektu