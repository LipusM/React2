const c = console.log.bind(document)

import Topping from "../Topping"
import './style.scss'

import { useState } from "react"

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings)
  
  const handleClick = (index) => {
    const selection = [...checked]
    selection[index].selected = !selection[index].selected

    setChecked(selection)
    c(selection[index]) //Test, jestli se opravdu vypisuje ten prvek, na který se kliklo a ano, vypisuje se ten, na který se kliklo
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => <Topping topping={topping} checked={checked[index].selected} selectTopping={() => handleClick(index)} key={topping.name} />)}
      </div>
    </>
  )
}

export default ToppingsSelect