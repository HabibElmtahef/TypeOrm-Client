import {createContext} from "react";
import GamesApi from './API/GamesApi'

export const GlobaleState = createContext()

export const DataProvider = ({children}) => {
    const state = {
        name: "Habib",
        GamesAPI: GamesApi()
    }

    return(
        <GlobaleState.Provider value={state} >
            {children}
        </GlobaleState.Provider>
    )
}