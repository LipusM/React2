const c = console.log.bind(document)

import "./style.scss"

const age1 = 25;
const age2 = 25;

const name1 = 'petr';
const name2 = 'petr';

const workout1 = [5, 3, 7];
const workout2 = [5, 3, 7];

const x = [1, 2, 3]
const y = x
x.push(4)

const Motivace = () => {
    return (
        <>
        {c("Věk:")}
        {c(age1 === age2)}

        {c("Jména:")}
        {c(name1 === name2)}

        {c("Cvičení:")}
        {c(workout1 === workout2)}

        {c("Proměnné x a y:")}
        {c(x === y)}

        {c(x)}
        </>
    )
}

export default Motivace