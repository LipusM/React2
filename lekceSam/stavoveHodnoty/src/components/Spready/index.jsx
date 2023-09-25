const c = console.log.bind(document)

import "./style.scss"

const x = [1, 2, 3]
x.unshift(0)

const Spready = () => {
    return (
        <>
            {c("Mutable, resp. na místě:")}
            {c(x)}

            {c("Immutable")}
            {c([...x, 4])}
        </>
    )
}

export default Spready