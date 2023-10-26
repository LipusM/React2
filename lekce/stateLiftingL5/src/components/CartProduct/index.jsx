const c = console.log.bind(document)

import { useSettings } from '../../settings-context'
import './style.scss'

const CartProduct = ({ name, price }) => {
  const {currency} = useSettings()

  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} {currency}</span>
    </div>
  )
}

export default CartProduct