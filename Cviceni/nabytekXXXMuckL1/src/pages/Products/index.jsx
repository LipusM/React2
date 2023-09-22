const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"

const Products = (props) => {
    return (
        <section>
            <div>
                <NavLink>
                    <img src="" alt="" />
                </NavLink>
                <div>{props.name}</div>
            </div>
        </section>
    )
}

export default Products