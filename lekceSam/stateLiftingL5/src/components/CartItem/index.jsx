const c = console.log.bind(document)

import { useState } from "react"

import Amount from "../Amount"
import CartProduct from "../CartProduct"
import './style.scss'

const CartItem = ({ product, onAmountChange }) => {

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} onChange={onAmountChange} />
    </div>
  )
  
}

export default CartItem