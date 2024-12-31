import { LOADING, GET_PRODUCTOS, GET_PRODUCTO_BY_ID, RESET_PRODUCTO } from '../actions/actionTypes'

const initialStore = {
    productos: [],
    producto: {},
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
                productos: action.payload,
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
        default:
            return state
    }
} 