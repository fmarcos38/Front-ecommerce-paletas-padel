import React from 'react'
import { NavLink } from 'react-router-dom';
import BotonFavorito from '../BotonFavorito';
import './styles.css';


function Card({id, nombre, precio, imagenes, agotado, enPromo, porcentajeDescuento}) {

    //estado para hover de la imgn - mostrando detalle
    const [showDetail, setShowDetail] = React.useState(false);
    
    return (
        <div className='cont-card'>
            <div className='cont-btn-fav-card'>
                <BotonFavorito idProducto={id} />
            </div>
            {/* carrusel de imagenes */}
            <NavLink to={`/detalleProd/${id}`} className='navLink-car'>
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                >
                    {/* imagen */}
                    <div className='cont-carrusel-card'>
                        <img src={imagenes[0]} alt={nombre} className='img-card' />
                    </div>

                    {/* msj detalle si hay hover */}
                    <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='palabra-abre-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>
            {/* data */}
            <div className='cont-info-card'>
            <p className='nombre-pala'>{nombre}</p>
            <p className='precio-pala'>${precio}</p>
            <button className='btn-agrega-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Card