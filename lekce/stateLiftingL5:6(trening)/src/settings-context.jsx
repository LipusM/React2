import { createContext, useContext, useState } from "react";

export const SettingsContext = createContext(); //vytváříme kontext

export const useSettings = () => useContext(SettingsContext) //Vlastní hook. Říkáme jaký hook chceme použít. Pomocí toho měníme ty hodnoty

//Vytváříme vlastní provider
export const SettingsProvider = ({children}) => {

    const [settings, setSettings] = useState({
        currency: "CZK"
      })
    
      //fce pomoci ktere budu menit stav. Všude v komponentách
      const setCurrency = (newCurrency) => {
        setSettings({...settings, currency: newCurrency})
      }
    

    return (
        <SettingsContext.Provider value={{...settings, setCurrency}}>
            {children}
        </SettingsContext.Provider>
    )
}