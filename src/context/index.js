import React, { useEffect } from "react";
import { createContext } from "react";

//creo contexto
export const AppContext = createContext();

//creo provider
export const AppProvider = ({ children }) => {
    
    //estado user log
    const [userLog, setUserLog] = React.useState(true); //jarcodeado en true para que no se muestre el login
    //estado data user
    const [dataUser, setDataUser] = React.useState({});

    const login = () => {
        setUserLog(true);
    };
    const logout = () => {
        setUserLog(false);
    };

    //efecto para verificar si hay usuario logueado
    useEffect(() => {
        const user = {
            nombre: "marcos",
            admin: true,
        };//userData();
        if(user){
            setDataUser(user);
            setUserLog(true);
        }
    }, []);


    return (
        <AppContext.Provider value={{
            userLog,
            login,
            logout,
            dataUser
        }}>
            {children}
        </AppContext.Provider>
    );
};