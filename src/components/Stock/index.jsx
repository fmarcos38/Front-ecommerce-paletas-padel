import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../../redux/actions/actions';

function Stock({ clienteId, productoId, stock}) {
console.log('stock', stock)
    const [cantidad, setCantidad] = React.useState(1); 
    const [stockActual, setStockActual] = React.useState(stock-1); 
    const dispatch = useDispatch();

    const handleOnClickMas = (e) => {
        if(stockActual){
            setCantidad(cantidad + 1);
            setStockActual(stockActual - 1);
            dispatch(agregarAlCarrito(clienteId, productoId, 1));
            if(stockActual === 0){
                return;
            }
        }else{
            return;
        }
    }
    const handleOnClickMenos = (e) => {
        if(cantidad >= stockActual){
            setCantidad(cantidad - 1);
            setStockActual(stockActual + 1);
            dispatch(agregarAlCarrito(clienteId, productoId, -1));
        }else{
            return;
        }
    }


    return (
        <div className='cont-stock'>
            <div className='cont-cant-vendida'>
                <button
                    onClick={handleOnClickMenos}
                    className='btn-menos-stock'
                >
                    -
                </button>
                <p className='p-cantidad-stock'>{cantidad}</p>
                <button
                    onClick={handleOnClickMas}
                    className='btn-mas-stock'
                >
                    +
                </button>
            </div>
            <p className={stock === 0 ? 'sinStock' : 'stock-pala-prod-carrito'}>Stock: {stockActual}</p>
        </div>
    )
}

export default Stock