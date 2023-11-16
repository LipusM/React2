


const Box = ({children, left, right}) => {
    return (
        <div className="box">
            <h2>Levy</h2>
            {left}
            <hr />

            <h2>Pravy</h2>
            {right}
            <hr />

            {children}
        </div>
    )
}

export default Box