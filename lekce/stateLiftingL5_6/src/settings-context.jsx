//1) Importy
import { createContext, useContext, useState  } from "react"

//2) Tvorba samotného contextu (resp. vytvářím to místo v paměti). Resp. konstruktor contextu.
//Název si zvolíme
export const SettingsContext = createContext()


//3) Tvorba vlastního hooku pro volání useContext (resp. fce používající v sobě jiný hook). Pro zjednodušení zápisu přístupu ke stavu.
//Custom hooky vyt. proto, aby měly větší vypovídající hodnotu. Aby nám lépe sdělily co ten kus kódu má dělat. 
//Když potřebujeme, aby dělal další věci, proto je lepší custom hook.
export const useSettings = () => useContext(SettingsContext) //Použití vlastního hooku, a jako hodnotu dáváme jaký context chceme použít.
                                                            //Pomocí můžou komponenty přistupovat k hodnotám v "value"


//4) Vlastní provider
//Může se stát, že ten kód bude v App (resp. index) velký a tím pádem nepřehledný. Tak se vytvoří vlastní PROVIDER
export const SetttingsProvider = ({children}) => { //children: to je co očekává. Jedná se o vnitřek uvnitř této komponenty, které se tam rendrují

    const [settings, setSettings] = useState({
        currency: "CZK"
      })
    
      const setCurrency = (newCurrency) => {
        setSettings({...settings, currency: newCurrency})
      }

    return (
        <SettingsContext.Provider value={{...settings, setCurrency}}> {/* Komponentám říkáme, že k tomu mají přístup */}
            {children}                                                {/* Do paměti se uloží to, co se posílá do "value" */}
        </SettingsContext.Provider>
    )
}
