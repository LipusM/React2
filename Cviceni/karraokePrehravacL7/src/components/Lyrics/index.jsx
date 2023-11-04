const c = console.log.bind(document)

import classnames from "classnames"

const Lyrics = ({lines, currentLineIndex}) => {

    return (
        <>
            {lines.map((line, index) => 
            <p key={line.time} className={classnames({"current-line": index === currentLineIndex})}>
                {line.text}
            </p>
            )}
        </>
    )
}

export default Lyrics