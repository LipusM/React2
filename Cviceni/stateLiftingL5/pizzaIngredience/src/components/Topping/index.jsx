const c = console.log.bind(document)

import Check from "../Check"
import './style.scss'

const Topping = ({ topping }) => {
  return (
    <div className="topping">
      <Check />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  )
}

export default Topping