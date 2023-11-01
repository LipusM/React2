//Nezbytné importy
import { createContext, useContext, useState } from "react";

//Tvorba contextu
export const PrefsContext = createContext()

//Tvorba vlastního hooku pro využití contextu
export const usePrefs = () => useContext(PrefsContext)

//Tvorba vlastního provideru
export const PrefsProvider = ({children}) => {

    const [veganOnly, setVeganOnly] = useState(true)

    const handleVegan = (veganStatus) => {
        setVeganOnly(veganStatus)
    }

    return (
        <PrefsContext.Provider value={{veganOnly, handleVegan}}>
            {children}
        </PrefsContext.Provider>
    )
}
