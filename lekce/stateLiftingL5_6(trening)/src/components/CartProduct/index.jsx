const c = console.log.bind(document)

import { useContext } from 'react'
import { useSettings } from '../../settings-context'
import { SettingsContext } from '../../settings-context' //Před použitím vlastního hooku.
import './style.scss'

const CartProduct = ({ name, price }) => {

  /* const value = useContext(SettingsContext) */ //K tomu stavu chce mít přístup i v jiné komponentě. Pomocí hooku "useContext". Jako argument bere vytvořený context v settings-contex.jsx
    
  /* const value = useSettings()*/     
  const {currency} = useSettings() //Nemusím se odkazovat na "value". Lze jít přímo po vlastnosti objektu, přes destrukturování.
  
  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} {currency}</span>
    </div>
  )
}

export default CartProduct