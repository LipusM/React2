import { createContext, useContext, useState } from "react"


//Tvorba samotného contextu (resp. vytvářím to místo v paměti). Resp. konstruktor contextu.
export const SettingsContext = createContext()


//Tvorba vlastního hooku pro volání useContext (resp. fce používající v sobě jiný hook). Pro zjednodušení zápisu přístupu ke stavu.
//Custom hooky vyt. proto, aby měly větší vypovídající hodnotu. Aby nám lépe sdělily co ten kus kódu má dělat. 
//Když potřebujeme, aby dělal další věci, proto je lepší custom hook.
export const useSettings = () => useContext(SettingsContext) //Použití vlastního hooku, a jako hodnotu dáváme jaký context chceme použít.
                                                            //Pomocí něho budeme přistupovat k hodnotám v "value"


//Může se stát, že ten kód bude v App (resp. index) velký a tím pádem nepřehledný. Tak se vytvoří vlastní PROVIDER
export const SetttingsProvider = ({children}) => { //children: to je co očekává. Jedná se o vnitřek uvnitř této komponenty, které se tam rendrují

    const [settings, setSettings] = useState({
        currency: "CZK"
      })
    
      const setCurrency = (newCurrency) => {
        setSettings({...settings, currency: newCurrency})
      }

    return (
        <SettingsContext.Provider value={{...settings, setCurrency}}> 
            {children}
        </SettingsContext.Provider>
    )
}
