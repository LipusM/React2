const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"

const Products = ({info}) => {
    return (
        <section>
            <div>
                {
                    info.map(product => <p>{product.name}</p>)
                }
            </div>
        </section>
    )
}

export default Products