const c = console.log.bind(document)

import Amount from "../Amount"
import CartProduct from "../CartProduct"
import './style.scss'

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} />
    </div>
  )
}

export default CartItem