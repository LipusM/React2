const c = console.log.bind(document)

import "./style.scss"

const x = [1, 2, 3]
x.unshift(8)

const Spready = () => {
    return (
        <>
            {c(x)}
        </>
    )
}

export default Spready