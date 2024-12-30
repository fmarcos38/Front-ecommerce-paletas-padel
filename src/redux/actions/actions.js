import axios from "axios";
import { URL } from "../../urls";
import { LOADING, GET_PRODUCTOS, GET_PRODUCTO_BY_ID } from "./actionTypes";

//registrarse
export const registrarse = (data) => {
    return async function() { 
        const resp = await axios.post(`${URL}/usuario/registrarse`, data);
        return resp;
    }
}

//-------producto-----------------------------
//trae productos
export const getProductos = () => {
    return async function(dispatch) { 
        dispatch({type: LOADING});
        const resp = await axios.get(`${URL}/producto`);
        dispatch({type: GET_PRODUCTOS, payload: resp.data});
    }
}

//trae por ID
export const getProductoById = (id) => {
    return async function(dispatch) { 
        dispatch({type: LOADING});
        const resp = await axios.get(`${URL}/producto/${id}`);
        dispatch({type: GET_PRODUCTO_BY_ID, payload: resp.data});
    }
}
//elimina producto
export const deleteProducto = (id) => {
    return async function(dispatch){
        await axios.delete(`${URL}/producto/${id}`);
        dispatch({type: 'DELETE_PRODUCTO', payload: id});
    }
}