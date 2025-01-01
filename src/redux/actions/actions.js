import axios from "axios";
import { URL } from "../../urls";
import { LOADING, GET_PRODUCTOS, GET_PRODUCTO_BY_ID, RESET_PRODUCTO, GET_PRODS_RANGO_PRECIO } from "./actionTypes";

//registrarse
export const registrarse = (data) => {
    return async function() { 
        const resp = await axios.post(`${URL}/usuario/registrarse`, data);
        return resp;
    }
}

//-------producto-----------------------------
//trae productos
export const getProductos = (limit, offset, categoria, marca, enPromo, precioMin, precioMax) => {
    return async function(dispatch) { 
        dispatch({type: LOADING});

        //construimos los parametros dinamicamente
        let queryParams = `?limit=${limit}&offset=${offset}`;

        //por categoria
        if(categoria) {
            queryParams += `&categoria=${categoria}`;
        }
        //por marca
        if(marca) {
            queryParams += `&marca=${marca}`;
        }
        //enPromo
        if(enPromo) {
            queryParams += `&oferta=${enPromo}`;
        }
        //precioMin
        if(precioMin) {
            queryParams += `&precioMin=${precioMin}`;
        }
        //precioMax
        if(precioMax) {
            queryParams += `&precioMax=${precioMax}`;
        }
        try {
            const resp = await axios.get(`${URL}/producto${queryParams}`);
            dispatch({type: GET_PRODUCTOS, payload: resp.data});
        } catch (error) {
            console.error('Error fetching properties:', error);
            // se pueden manejar el error aquí si lo necesitas
        }
    }
}

//trae productos +- $30.000 al prod seleccionado
export const getProductosRangoPrecio = (limit, offset, precioBase, precioTope) => {
    return async function(dispatch) { console.log('limit', limit, 'offset', offset, 'precioBase', precioBase, 'precioTope', precioTope);
        dispatch({type: LOADING});
        const resp = await axios.get(`${URL}/producto/rangoPrecio?limit=${limit}&offset=${offset}&precioMin=${precioBase}&precioMax=${precioTope}`);
        dispatch({type: GET_PRODS_RANGO_PRECIO, payload: resp.data});
    }
}

//trae por ID
export const getProductoById = (id) => {
    return async function(dispatch) {
        const resp = await axios.get(`${URL}/producto/${id}`); 
        dispatch({type: GET_PRODUCTO_BY_ID, payload: resp.data});
    }
}

//reset producto
export const resetProducto = () => {
    return {
        type: RESET_PRODUCTO,
    }
}

//elimina producto
export const deleteProducto = (id) => {
    return async function(dispatch){
        await axios.delete(`${URL}/producto/${id}`);
        dispatch({type: 'DELETE_PRODUCTO', payload: id});
    }
}