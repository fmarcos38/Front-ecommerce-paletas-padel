import React, { useContext } from 'react'
import './styles.css';
import { AppContext } from '../../context';


function CarritoCompras() {

    const context = useContext(AppContext);
    const handleClickCerrarCarrito = () => {
        context.onClickCarrito();
    }

    return (
        <div className='carrito-compras'>
            <div className='cont-btn-cerrar-Y-titulo'>
                <h2 className='titulo-carrito'>Carrito de Compras</h2>
                <button className='btn-cerrar-carrito' onClick={handleClickCerrarCarrito}>X</button>
            </div>
        </div>
    )
}

export default CarritoCompras