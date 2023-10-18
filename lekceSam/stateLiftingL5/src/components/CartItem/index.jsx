const c = console.log.bind(document)

import { useState } from "react"

import Amount from "../Amount"
import CartProduct from "../CartProduct"
import './style.scss'

const CartItem = ({ product }) => {
  const [count, setCount] = useState(product.amount)

  const handleAmountChange = (newCount) => {
      setCount(newCount)
  }

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={count} onChange={handleAmountChange} />
    </div>
  )
}

export default CartItem