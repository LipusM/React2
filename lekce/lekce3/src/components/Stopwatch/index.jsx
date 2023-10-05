const c = console.log.bind(document)

import { useEffect, useState } from "react"

const Stopwatch = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            /* c("tik tak") */
            setCount((prev) => {return prev + 1})
            c("tik")
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    return (
        <div className="stopwatch">
            <h2>Stopky: {count}</h2>
        </div>
    )
}

export default Stopwatch