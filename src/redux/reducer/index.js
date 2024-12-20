const initialStore = {
    productos: [],
    producto: {},
    loading: false,
}

export default function rootReducer (state = initialStore, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCTOS':
            return {
                ...state,
                productos: action.payload,
                loading: false
            }
        case 'GET_PRODUCTO':
            return {
                ...state,
                producto: action.payload,
                loading: false
            }
        default:
            return state
    }
} 