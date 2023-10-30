const c = console.log.bind(document)

import './style.scss'

const CartProduct = ({ name, price }) => {

  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} CZK</span>
    </div>
  )
}

export default CartProduct