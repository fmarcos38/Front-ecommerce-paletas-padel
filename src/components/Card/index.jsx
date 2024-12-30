import React from 'react'
import BotonFavorito from '../BotonFavorito';
import './styles.css';

function Card({id, nombre, precio, imagenes}) {
    return (
        <div className='cont-card'>
            <div className='cont-btn-fav-card'>
                <BotonFavorito />
            </div>
            {/* carrusel de imagenes */}
            <div className='cont-carrusel-card'>
                <img src={imagenes[0]} alt={nombre} className='img-card' />
            </div>
            <h1 className='nombre-pala'>{nombre}</h1>
            <h2 className='precio-pala'>{precio}</h2>
            <button className='btn-card'>Agregar al carrito</button>
        </div>
    )
}

export default Card