const c = console.log.bind(document)

import { NavLink } from "react-router-dom"

import "./style.scss"

const Products = ({props}) => {

    return (
        <section id="allProducts">
                {
                    props.map
                    (product => 
                    <div key={product.id} className="product">
                        <NavLink><img src={product.image} alt="" /></NavLink>
                        <p>{product.name}</p>
                    </div>
                    )
                }
        </section>
    )
}

export default Products