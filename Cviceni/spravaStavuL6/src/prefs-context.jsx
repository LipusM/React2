import { createContext, useContext, useState } from "react";

export const PrefsContext = createContext(); //vytváříme kontext

//Vlastní hook
export const usePrefs = () => useContext(PrefsContext)

//Vlastní provider
export const PrefsProvider = ({children}) => {

    const [vegansOnly, setVegansOnly] = useState(true)

    const setVegan = (choice) => {
        setVegansOnly(choice)
    }

    return(
        <PrefsContext.Provider value={{vegansOnly, setVegan}}>
            {children}
        </PrefsContext.Provider> 
    )
}