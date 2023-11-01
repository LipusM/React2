import { useState } from "react";
import { createContext, useContext } from "react";


//Tvorba contextu
export const SettingsContext = createContext()

//Tvorba vlastního hooku
export const useSettings = () => useContext(SettingsContext)

//Tvorba vlastního provideru
export const SettingsProvider = ({children}) => {

    const [settings, setSettings] = useState({ //Výchozí hodnoty pro komponenty Emoticon, EyesSelector, MouthSelector a ColorSelector
        eyes: 1,
        mouth: 2,
        color: 3,
    })

    const handleSettings = (settingStatus) => {
        setSettings(settingStatus)
    }

    return (
        <SettingsContext.Provider value={{settings, handleSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}



