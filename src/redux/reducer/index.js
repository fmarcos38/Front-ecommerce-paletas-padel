import { 
    LOADING, GET_PRODUCTOS, GET_PRODUCTO_BY_ID, RESET_PRODUCTO, GET_PRODS_RANGO_PRECIO, 
    OPEN_CLOSE_MODAL, LOGIN, RESET_LOGIN, GET_USER, GET_FAVORITOS, RESET_USER,
    GET_PRODUTOS_OFERTA,
    GET_CARRITO
} from '../actions/actionTypes'

const initialStore = {
    dataUsuario: null,
    favoritos: [],
    carrito: {},
    productos: [],
    totProds: 0,
    producto: {},
    enPromo: [],
    productosRangoPrecio: [],
    isModalOpen: false,
    loading: false,
}

export default function rootReducer (state = initialStore, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                dataUsuario: action.payload,
            }
        case RESET_LOGIN:
            return {
                ...state,
                dataUsuario: null,
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTOS:
            return {
                ...state,
                productos: action.payload.prodsNormalizados,
                totProds: action.payload.total,
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
        case GET_PRODUTOS_OFERTA:
            return {
                ...state,
                enPromo: action.payload,
            }
        case GET_PRODS_RANGO_PRECIO:
            return {
                ...state,
                productosRangoPrecio: action.payload,
                loading: false
            }
        case OPEN_CLOSE_MODAL:
            console.log('state:', state.isModalOpen);
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            }
        case GET_USER:
            return {
                ...state,
                dataUsuario: action.payload,
            }
        case RESET_USER:
            return {
                ...state,
                dataUsuario: null,
            }
        case GET_FAVORITOS:
            return {
                ...state,
                favoritos: action.payload,
            }
        case GET_CARRITO:
            return {
                ...state,
                carrito: action.payload,
            }
        default:
            return state
    }
} 