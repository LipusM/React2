const c = console.log.bind(document)

import { useState } from "react";

import CartItem from "../CartItem";
import './style.scss';

const products = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products)

  const handleAmountChange = (index, amount) => {
    const newProducts = [...cartProducts]

    newProducts[index].amount = amount

    setCartProducts(newProducts)
  }

  let productCount = 0
  cartProducts.map(product => productCount += product.amount)

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {productCount}</span>
      </div>
      <div className="cart__items">
        {cartProducts.map((product, index) => (
          <CartItem product={product} onAmountChange={amount => handleAmountChange(index, amount)} />
        ))}
      </div>
    </div>
  )
}

export default Cart