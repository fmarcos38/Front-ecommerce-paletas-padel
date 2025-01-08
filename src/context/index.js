import React, { useEffect } from "react";
import { createContext } from "react";

//creo contexto
export const AppContext = createContext();

//creo provider
export const AppProvider = ({ children }) => {

    //estado data user
    const [dataUser, setDataUser] = React.useState({}); console.log("dataUser", dataUser);

    //efecto para verificar si hay usuario logueado
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('dataUser'));
        if(data){
            setDataUser(data);
        }
    }, []);


    return (
        <AppContext.Provider value={{
            dataUser,
        }}>
            {children}
        </AppContext.Provider>
    );
};