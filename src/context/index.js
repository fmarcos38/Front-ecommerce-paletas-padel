import React, { useEffect } from "react";
import { createContext } from "react";

//creo contexto
export const AppContext = createContext();

//creo provider
export const AppProvider = ({ children }) => {
    
    //estado user log
    //const [userLog, setUserLog] = React.useState(false);
    //estado data user
    //const [dataUser, setDataUser] = React.useState({}); console.log("dataUser:",dataUser);

    /* /const login = () => {
        setUserLog(true);
    };
    const logout = () => {
        setUserLog(false);
    }; */

    //efecto para verificar si hay usuario logueado
    useEffect(() => {
        
    }, []);


    return (
        <AppContext.Provider value={{
            
        }}>
            {children}
        </AppContext.Provider>
    );
};