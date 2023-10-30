import { createContext, useContext } from "react"

//Tvorba samotného contextu (resp. vytvářím to místo v paměti)
export const SettingsContext = createContext()

//Tvorba vlastního hooku pro volání useContext (resp. fce používající v sobě jiný hook). Pro zjednodušení zápisu přístupu ke stavu.
//Custom hooky vyt. proto, aby měly větší vypovídající hodnotu. Aby nám lépe sdělily co ten kus kódu má dělat. 
//Když potřebujeme, aby dělal další věci, proto je lepší custom hook.
export const useSettings = () => useContext(SettingsContext)




