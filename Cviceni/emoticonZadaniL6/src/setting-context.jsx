import { useState } from "react";
import { createContext, useContext } from "react";

import eyesImg from './img/eyes1.svg';
import mouthImg from './img/mouth1.svg';


//Tvorba contextu
export const SettingsContext = createContext()

//Tvorba vlastního hooku
export const useSettings = () => useContext(SettingsContext)

//Tvorba vlastního provideru
export const SettingsProvider = ({children}) => {

    const [settings, setSettings] = useState({ //Výchozí hodnoty pro komponenty Emoticon, EyesSelector, MouthSelector a ColorSelector
        eyes: eyesImg,
        mouth: mouthImg,
        color: "#ff2e12",
    })

    const handleSettings = (settingStatus) => { //Funkce pro změnu stavu "settings"
        setSettings(settingStatus)
    }

    return (
        <SettingsContext.Provider value={{settings, handleSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}



