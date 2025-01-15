import React, { useEffect } from "react";
import { createContext } from "react";

//creo contexto
export const AppContext = createContext();

//creo provider
export const AppProvider = ({ children }) => {

    const [dataUser, setDataUser] = React.useState({}); //estado data user
    const [carritoModal, setCarritoModal] = React.useState(false); console.log("modal:", carritoModal) //estado modal carrito
    
    const marcas = ['Nox', 'Bullpadel', 'Wilson', 'Head',]; //arreglo de marcas
    const categorias = ['Paletas', 'Pelotas', 'Zapatillas', 'Bolsos']; //arreglo de categorías

    const onClickCarrito = () => {
        setCarritoModal(!carritoModal);
    };

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
            marcas,
            categorias,
            carritoModal,
            onClickCarrito,
        }}>
            {children}
        </AppContext.Provider>
    );
};