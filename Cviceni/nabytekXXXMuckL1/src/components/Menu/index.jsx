const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"

const Menu = () => {
    return (
        <header>
            <NavLink to="/"><h1>XXXMuck</h1></NavLink>
        </header>
    )
}

export default Menu