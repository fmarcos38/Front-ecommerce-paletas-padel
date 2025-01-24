import React from 'react'
import Stock from '../Stock';
import BotonEliminaProdCarrito from '../BotoneliminaProdCarrito';
import './styles.css';

function CardProdCarrito({clienteId, productoId, nombre, precio, imagenes, stock}) {
    
    return (
        <div className='cont-card-prod-carrito'>
            <div className='cont-img-card-prod-carrito'>
                <img src={imagenes[0]} alt={nombre} className='img-card-prod-carrito' />
            </div>
            <div className='cont-info-card-prod-carrito'>
                <p className='nombre-pala-prod-carrito'>{nombre}</p>
                <p className='precio-pala-prod-carrito'>${precio}</p>
                <div className='cont-stock-card-prod-carrito'>
                    <Stock clienteId={clienteId} productoId={productoId} stock={stock} />
                </div>
            </div>
            <div className='cont-btn-elimina-prod-carrito'>
                <BotonEliminaProdCarrito clienteId={clienteId} productoId={productoId} />
            </div>
        </div>
    )
}

export default CardProdCarrito