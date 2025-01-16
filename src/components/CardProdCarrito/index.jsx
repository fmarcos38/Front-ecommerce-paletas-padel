import React from 'react'
import './styles.css';
import Stock from '../Stock';
import BotonEliminaProdCarrito from '../BotoneliminaProdCarrito';

function CardProdCarrito({clienteId, productoId, nombre, precio, imagenes, stock}) {
    
    return (
        <div className='cont-card-prod-carrito'>
            <div className='cont-img-card-prod-carrito'>
                <img src={imagenes[0]} alt={nombre} className='img-card-prod-carrito' />
            </div>
            <div className='cont-info-card-prod-carrito'>
                <p className='nombre-pala-prod-carrito'>{nombre}</p>
                <p className='precio-pala-prod-carrito'>${precio}</p>
                <div style={{ width: '20%', height: '20px', display: 'flex', justifyContent:'start', alignItems: 'center'}}>
                    <Stock stock={stock} />
                </div>
                <p className='stock-pala-prod-carrito'>Stock: {stock}</p>
            </div>
            <div>
                <BotonEliminaProdCarrito clienteId={clienteId} productoId={productoId} />
            </div>
        </div>
    )
}

export default CardProdCarrito