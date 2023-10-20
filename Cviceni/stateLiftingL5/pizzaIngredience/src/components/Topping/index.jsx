const c = console.log.bind(document)

import Check from "../Check"
import './style.scss'

import { useState } from "react"

const Topping = ({ topping }) => {
  const [checked, setChecked] = useState(false)
  
  const handleClick = () => {
    setChecked(!checked);
  }

  return (
    <div className="topping">
      <Check checked={checked} onChange={handleClick}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  )
}

export default Topping