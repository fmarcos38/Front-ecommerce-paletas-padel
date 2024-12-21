import { createContext } from "react";


//creo contexto
export const AppContext = createContext();

//creo provider
export const AppProvider = ({ children }) => {
    
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};