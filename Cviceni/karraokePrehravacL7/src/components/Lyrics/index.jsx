const c = console.log.bind(document)

import classnames from "classnames"
import { useEffect, useRef } from "react"

const Lyrics = ({lines, currentLineIndex}) => {

    const activeLine = useRef()

    useEffect(() => {
        if(activeLine.current){ //Kontrola, zda-li "activeLine.current" není null nebo undefined
            activeLine.current.scrollIntoView({
                block: "start",
                inline: 'nearest',
                behavior: 'smooth',
              })}
    }, [currentLineIndex])

    return (
        <>
            {lines.map((line, index) => 
            <p ref={index === currentLineIndex ? activeLine : null} key={line.time} className={classnames({"current-line": index === currentLineIndex})}>
                {line.text}
            </p>
            )}
        </>
    )
}

export default Lyrics