const c = console.log.bind(document)

import { useState } from "react"
import { useEffect } from "react"

const Child1 = () => {

    const [count, setCount] = useState(0)

    c("child1-render")

    useEffect(() => {
        c("child1-mount (připojení)")

        return () => {
            c("child1-unmount (odpojení)")
        }

    }, [])

    useEffect(() => {
        c("child1 - update (aktualizace)")
    })

    return(
        <div className="child1">
            <h2>Main</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Child1