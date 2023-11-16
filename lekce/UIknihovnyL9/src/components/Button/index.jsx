const c = console.log.bind(document)

import "./style.scss"

const Button = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default Button