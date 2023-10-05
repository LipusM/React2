const c = console.log.bind(document)

import { useState } from "react"
import { useEffect } from "react"
import Child1 from "../Child1"
import Stopwatch from "../Stopwatch"

const Main = () => {

    const [count, setCount] = useState(0)

    c("main-render")

    useEffect(() => {
        c("main-mount (připojení)")

        return () => {
            c("main-unmount (odpojení)")
        }

    }, [])

    useEffect(() => {
        c("main - update (aktualizace)")
    })

    return(
        <div className="main">
            <h2>Main</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            {/* <Child1 /> */}
            <Stopwatch />
        </div>
    )
}

export default Main