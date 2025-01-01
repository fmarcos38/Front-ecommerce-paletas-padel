import { LOADING, GET_PRODUCTOS, GET_PRODUCTO_BY_ID, RESET_PRODUCTO, GET_PRODS_RANGO_PRECIO } from '../actions/actionTypes'

const initialStore = {
    productos: [],
    totProdos: 0,
    producto: {},
    productosRangoPrecio: [],
    loading: false,
}

export default function rootReducer (state = initialStore, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTOS:
            return {
                ...state,
                productos: action.payload.prodsNormalizados,
                totProdos: action.payload.total,
                loading: false
            }
        case GET_PRODUCTO_BY_ID:
            return {
                ...state,
                producto: action.payload,
                loading: false
            }
        case RESET_PRODUCTO:
            return {
                ...state,
                producto: {},
            }
        case GET_PRODS_RANGO_PRECIO:
            return {
                ...state,
                productosRangoPrecio: action.payload,
                loading: false
            }
        default:
            return state
    }
} 