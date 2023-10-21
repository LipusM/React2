const c = console.log.bind(document)

import Topping from "../Topping"
import './style.scss'

import { useState, useEffect } from "react"

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings)
  
  //Fce pro vybírání topping
  const handleClick = (index) => {
    const selection = [...checked]
    selection[index].selected = !selection[index].selected

    setChecked(selection)
  }

  //Fce pro vyhodnocení počtu vybraných topping
  const toppingAmount = () => {
    return checked.reduce((sum, chosenTopping) => sum += chosenTopping.selected, 0)
  }

  //Fce pro vyhodnocení celkové ceny vybraných topping
  const toppingPrice = () => {
      return checked.reduce((sum, chosenTopping) => sum += chosenTopping.price, 0).toFixed(2)
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingAmount()}, total price: {toppingPrice()} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => <Topping topping={topping} checked={checked[index].selected} 
        selectTopping={() => handleClick(index)} key={topping.name} />)}
      </div>
    </>
  )
}

export default ToppingsSelect