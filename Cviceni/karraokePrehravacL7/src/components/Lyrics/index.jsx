const c = console.log.bind(document)

const Lyrics = ({lines}) => {

    return (
        <>
            {
            lines.map(line => <p>{line.text}</p>)
            }
        </>
    )
}

export default Lyrics